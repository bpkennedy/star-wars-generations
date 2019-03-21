import { start } from './server'
import * as log from 'loglevel'

process.on('unhandledRejection', err => {
  log.error(err)
})

start()
