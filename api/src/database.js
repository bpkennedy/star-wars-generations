import * as log from 'loglevel'
import knexMigrate from 'knex-migrate'
import { Model } from 'objection'
import { Ship } from './dao/ship-dao'
let knex

const dataModels = [
  Ship
]

export async function setup(host = 'db', port = 5432) {
  knex = require('knex')({
    client: 'pg',
    version: '9.0',
    connection: {
      host,
      port,
      user: 'swgapi',
      password: 'swgapi',
      database: 'swgdb',
    },
    pool: {
      min: 2,
      max: 80
    }
  })
  Model.knex(knex)
  await knexMigrate('up', {}, log.error)
}

export async function shutdown() {
  knex.destroy()
}

export async function removeExistingData() {
  for (const dataModel of dataModels) {
      await dataModel.query().delete()
  }
}