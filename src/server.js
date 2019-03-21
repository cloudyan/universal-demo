import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './Html';
import App from './components/App';
import manifest from './chunk-manifest.json';
import router from './router';

async function serverRender(ctx) {
  const styles = new Set();
  const scripts = new Set();

  // console.log(ctx);
  const moduleName = '/countdown';
  // ctx = moduleName;
  // ctx = {
  //   path: moduleName,
  // };

  const addChunk = chunk => {
    if (manifest[chunk]) {
      manifest[chunk]
        .filter(asset => asset.endsWith('.js'))
        .forEach(asset => scripts.add(asset));
      manifest[chunk]
        .filter(asset => asset.endsWith('.css'))
        .forEach(asset => styles.add(asset));
    } else if (__DEV__) {
      throw new Error(`Chunk with name '${chunk}' cannot be found`);
    }
  };

  const route = router(ctx)
  let content = {}
  if (route) {
    content = await route.default()
  }

  addChunk('client');

  if (content.chunk) addChunk(content.chunk);
  if (content.chunks) content.chunks.forEach(addChunk);

  const insertVar = `window.moduleName = '${moduleName}';`;

  const data = {
    styles: Array.from(styles),
    scripts: Array.from(scripts),
    title: content.title,
    app: {},
    insertVar,
    children: ReactDOMServer.renderToString(<App>
      {
        content.component
          ? content.component
          : <div>not found</div>
      }
    </App>)
  }
  const html = ReactDOMServer.renderToStaticMarkup(<Html {...data} />)

  return html
}

export default serverRender
