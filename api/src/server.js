import Hapi from 'hapi'
import { initDatabase } from './database'
initDatabase((db) => {
  console.log('in final callback')
  console.log(db)
})

const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello, world!'
  }
})

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (request, h) => {
    return 'Hello, ' + encodeURIComponent(request.params.name) + '!'
  }
})

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()

module.exports = server;