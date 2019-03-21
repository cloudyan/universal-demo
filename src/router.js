import routes from './routes';

export default function(ctx) {
  const route = routes.find(route => route.path === ctx.path)
  return route && route.load()
}
