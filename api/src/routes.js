import * as log from 'loglevel'
import {
  shipGetHandler
} from './api/ships-api'

const basePath = '/api/1.0'

const shipListGetRoute = {
  method: 'GET',
  path: basePath + '/ships',
  config: {
    handler: shipGetHandler,
    description: 'Get list of ships',
    tags: ['api'],
    validate: {},
  },
}

export async function addRoutes(server) {
  const routes = [
    shipListGetRoute,
  ]

  for (const route of routes) {
    route.config.handler = safeHandler(route.config.handler)
    server.route(route)
  }
}

function safeHandler(fn) {
  return async (request, h) => {
    try {
      return await fn(request, h)
    } catch (err) {
      log.error(err)
      return h.response('').code(500)
    }
  }
}