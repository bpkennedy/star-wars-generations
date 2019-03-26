import Hapi from 'hapi'
import * as log from 'loglevel'
import VError from 'verror'
import * as routes from './routes'
import * as Inert from 'inert'
import * as Vision from 'vision'
import * as HapiSwagger from 'hapi-swagger'
import * as db from './database'

let server

export async function start(includeSwagger = true, port = 3000) {
  try {
    if (port === 3000) {
      await db.setup() 
    } else {
      await db.setup('localhost')
    }
  } catch(error) {
    throw new VError(error, 'Error setting up database')
  }

  server = new Hapi.Server({
    port,
    host: '0.0.0.0',
  })

  await routes.addRoutes(server)

  server.events.on({
    name: 'request',
    channels: 'internal'
  }, (request, event, tags) => {
    console.error(event)
    if (tags.error && tags.state) {
      console.error(event)
    }
  })

  const swaggerOptions = {
    info: {
      title: 'Star Wars Generations API Documentation',
      version: '1.0',
    },
  }

  const plugins = [
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]

  if (includeSwagger) {
    await server.register(plugins)
  }

  await server.start()
  log.info(`Server running at: ${server.info.uri}`)
}

export async function stop() {
  try {
    await db.shutdown() 
  } catch(error) {
    throw new VError(error, 'Error shutting down the server')
  }
  return await server.stop({
    timeout: 5000
  })
}