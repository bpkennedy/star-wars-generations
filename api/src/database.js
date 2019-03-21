import * as log from 'loglevel'
import knex from 'knex'
import { Model } from 'objection'
import { Ship } from './dao/ship-dao'

let pg

const dataModels = [
  Ship
]

export async function setup(host = 'db', port = 5432) {
  pg = knex({
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
  // Model.knex(knex)
  pg.migrate.latest();
}

export async function shutdown() {
  pg.destroy()
}

export async function removeExistingData() {
  for (const dataModel of dataModels) {
      await dataModel.query().delete()
  }
}
