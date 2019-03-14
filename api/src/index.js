import * as server from './server'
import * as log from 'loglevel'

process.on('unhandledRejection', err => {
  log.error(err)
})

server.start()