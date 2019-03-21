const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');

const ROOT_DIR = path.resolve(__dirname, './');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');
const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass)$/;
const reImage = /\.(bpm|gif|jpg|jpeg|png|svg)$/;
const staticAssetName = 'assets/[name].[ext]';
const BUILD_DIR = path.resolve(__dirname, 'dist');

const resolve = {
  modules: ['node_modules'],
  alias: {
    '~': SRC_DIR
  },
}

module.exports = {
  context: ROOT_DIR,
  mode: 'development',
  // mode: 'production',
  devtool: 'cheap-module-inline-source-map',
  name: 'client',
  resolve,
  entry: {
    client: [
      'webpack-hot-middleware/client',
      path.resolve(SRC_DIR, 'client.js'),
    ],
  },
  target: 'web',
  output: {
    path: BUILD_DIR,
    filename: 'assets/[name].js',
    publicPath: '/', // 使用子目录就留空，不要使用 '/'
    // publicPath: 'http://cdn.cn/',
    chunkFilename: 'assets/[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          // require.resolve('style-loader'),
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // sourceMap: false,
              // modules: true,
              // localIdentName: '[path]_[local]',
              // exportOnlyLocals: true,
            }
          },
          // {
          //   loader:'postcss-loader',
          //   options: {
          //     // Necessary for external CSS imports to work
          //     // https://github.com/facebookincubator/create-react-app/issues/2677
          //     ident: 'postcss',
          //     plugins: () => [
          //       // require('postcss-flexbugs-fixes'),
          //       // autoprefixer({
          //       //   browsers: [
          //       //     '>1%',
          //       //     'last 4 versions',
          //       //     'Firefox ESR',
          //       //     'not ie < 9', // React doesn't support IE8 anyway
          //       //   ],
          //       //   flexbox: 'no-2009',
          //       // }),
          //     ],
          //   },
          // },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "./src/"),
        ],
        loader: "babel-loader",
        options: {
          babelrc: false,
          cacheDirectory: false,
          presets: [
            [
              "@babel/env",
              {
                targets: "> 0.25%, not dead",
                modules: false,
                useBuiltIns: false,
              },
            ], [
              "@babel/preset-react",
              {
                development: true,
              },
            ],
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-transform-runtime"],
            ["react-hot-loader/babel"],
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
          ],
        },
      },
      {
        test: reImage,
        oneOf: [
          // Inline lightweight images into CSS
          {
            issuer: reStyle,
            oneOf: [
              // Inline lightweight SVGs as UTF-8 encoded DataUrl string
              {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },

              // Inline lightweight images as Base64 encoded DataUrl string
              {
                loader: 'url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
            ],
          },

          // Or return public URL to image resource
          {
            loader: 'file-loader',
            options: {
              name: staticAssetName,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: true,
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new WebpackAssetsManifest({
      writeToDisk: true,
      output: './manifest.json',
      publicPath: true,
      done: (manifest, stats) => {
        const chunkFileName = `${BUILD_DIR}/chunk-manifest.json`;
        try {
          const fileFilter = file => !file.endsWith('.map');
          const addPath = file => manifest.getPublicPath(file);
          const chunkFiles = stats.compilation.chunkGroups.reduce((acc, c) => {
            acc[c.name] = [
              ...(acc[c.name] || []),
              ...c.chunks.reduce(
                (files, cc) => [
                  ...files,
                  ...cc.files.filter(fileFilter).map(addPath),
                ],
                [],
              ),
            ];
            return acc;
          }, Object.create(null));
          fs.writeFileSync(chunkFileName, JSON.stringify(chunkFiles, null, 2));
        } catch (err) {
          console.error(`ERROR: Cannot write ${chunkFileName}: `, err);
          if (!isDebug) process.exit(1);
        }
      },
    }),
  ],
}
