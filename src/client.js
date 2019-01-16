import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import router from './router';

async function clientRender() {
  const context = {
    path: location.pathname,
  }
  const route = router(context)
  let content = {}
  if (route) {
    content = await route.then(controller => {
      return controller.default(context)
    })
  }

  ReactDOM.hydrate(
    <App>
      {
        content.component
          ? content.component
          : <div>not found</div>
      }
    </App>,
    document.querySelector('#app'),
  );
}

clientRender()