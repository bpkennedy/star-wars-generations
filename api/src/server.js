import Hapi from 'hapi'
import * as log from 'loglevel'
import * as routes from './routes'
import * as Inert from 'inert'
import * as Vision from 'vision'
import * as HapiSwagger from 'hapi-swagger'
import * as db from './database'

let server = new Hapi.Server({
  port: 3000,
  host: '0.0.0.0',
})

async function start(includeSwagger = true) {
  await db.setup()

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

async function stop() {
  await db.shutdown()
}

module.exports = {
  server,
  start,
  stop
}
