import * as log from 'loglevel'
import { shipGetHandler } from './api/ships-api'
import { moduleGetHandler } from './api/modules-api'
import { playerGetHandler } from './api/players-api'

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

const moduleListGetRoute = {
  method: 'GET',
  path: basePath + '/modules',
  config: {
    handler: moduleGetHandler,
    description: 'Get list of modules',
    tags: ['api'],
    validate: {},
  },
}

const playerListGetRoute = {
  method: 'GET',
  path: basePath + '/players',
  config: {
    handler: playerGetHandler,
    description: 'Get list of players',
    tags: ['api'],
    validate: {},
  },
}

export async function addRoutes(server) {
  const routes = [
    shipListGetRoute,
    moduleListGetRoute,
    playerListGetRoute,
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