const routes = [
  {
    path: '/',
    load: () => {
      if (__isClient__) {
        return import(/* webpackChunkName: 'home' */ './home');
      } else {
        return require('./home');
      }
    },
  },
  {
    path: '/about',
    load: () => {
      if (__isClient__) {
        return import(/* webpackChunkName: 'about' */ './about');
      } else {
        return require('./about');
      }
    },
  },
  {
    path: '/countdown',
    load: () => {
      if (__isClient__) {
        return import(/* webpackChunkName: 'countdown' */ './countdown');
      } else {
        return require('./countdown');
      }
    },
  },
];

export default routes;
