import { Server } from 'miragejs';
import factories from './factories'
import models from './models'
import seeds from './seeds'
import routes from './routes'

export const makeServer = ({ environment = "development"} = {}) => {
  return new Server({
    environment,
    factories,
    models,
    seeds,
    routes
  })
}