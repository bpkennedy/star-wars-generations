import {
  Model
} from 'objection'

let knex

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
    },
  })
  Model.knex(knex)
}

export async function shutdown() {
  knex.destroy()
}