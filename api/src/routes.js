import * as log from 'loglevel'
import Joi from 'joi'

import {
  shipGetHandler
} from './api/ships-api'
import {
  userCreateHandler,
  userLoginHandler,
} from './api/user-api'

const basePath = '/api/1.0'

const shipListGetRoute = {
  method: 'GET',
  path: basePath + '/ships',
  config: {
    handler: shipGetHandler,
    description: 'Get list of ships',
    tags: ['api'],
    validate: {},
    auth: { 
      strategy: 'jwt',
      access: [{
        scope: ['admin']
      }]
    },
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    },
  },
}

const userCreateRoute = {
  method: 'POST',
  path: basePath + '/users',
  config: {
    handler: userCreateHandler,
    description: 'Create a user',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        email: Joi.string().trim().email().required().description('Email address'),
        password: Joi.string().trim().required().description('Password'),
        admin: Joi.boolean().optional().description('Is user admin?')
      })
    },
    auth: false,
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    },
  },
}

const userLoginRoute = {
  method: 'POST',
  path: basePath + '/login',
  config: {
    handler: userLoginHandler,
    description: 'Login a user',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        email: Joi.string().trim().email().required().description('Email address'),
        password: Joi.string().trim().required().description('Password'),
      })
    },
    auth: false,
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    },
  },
}

export async function addRoutes(server) {
  const routes = [
    shipListGetRoute,
    userCreateRoute,
    userLoginRoute,
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