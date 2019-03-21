const path = require('path');
const Koa = require('koa');
const webpack = require('webpack');
const clientWebpackconfig = require('./webpack.client.config');
const serverWebpackconfig = require('./webpack.server.config');
const webpackDevMiddleware = require('./middlewares/webpackDevMiddleware');
const webpackHotMiddleware = require('./middlewares/webpackHotMiddleware');

const app = new Koa();

const multiCompiler = webpack([clientWebpackconfig, serverWebpackconfig]);
// const multiCompiler = webpack([serverWebpackconfig]);
const clientCompiler = multiCompiler.compilers.find(
  compiler => compiler.name === 'client',
);
const serverCompiler = multiCompiler.compilers.find(
  compiler => compiler.name === 'server',
);

app.use(webpackDevMiddleware(clientCompiler, {
  publicPath: '/',
  writeToDisk: true,
}));
app.use(webpackDevMiddleware(serverCompiler, {
  writeToDisk: true,
}));

app.use(webpackHotMiddleware(clientCompiler));

serverCompiler.hooks.done.tap('server', stats => {
  console.log('-------------- purge cache --------------')
  purgeCache(('./dist/server'));
});

app.use(async function (ctx) {
  const serverRender = require('./dist/server');

  // 配置渲染的模块即可
  // ctx = { path: '/countdown' };
  const html = await serverRender.default({ path: '/countdown' })

  ctx.body = `<!DOCTYPE html>${html}`
});

app.listen(3001, function () {
  console.log(`app start: http://localhost:3001`)
});

function purgeCache(moduleName) {
  searchCache(moduleName, function (mod) {
    delete require.cache[mod.id];
  });

  Object.keys(module.constructor._pathCache).forEach(function (cacheKey) {
    if (cacheKey.indexOf(moduleName) > 0) {
      delete module.constructor._pathCache[cacheKey];
    }
  });
};

function searchCache(moduleName, callback) {
  var mod = require.resolve(moduleName);

  if (mod && ((mod = require.cache[mod]) !== undefined)) {
    (function traverse(mod) {
      mod.children.forEach(function (child) {
        traverse(child);
      });
      callback(mod);
    }(mod));
  }
};
