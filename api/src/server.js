import Hapi from 'hapi'

// checking for if in Heroku environment, as it cannot bind host to 'localhost'
const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.PORT ? '0.0.0.0' : 'localhost'
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