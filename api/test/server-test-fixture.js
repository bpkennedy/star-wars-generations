import * as server from '../src/server'
import * as _ from 'lodash'
import axios from 'axios'
import {
  User
} from '../src/dao/user-dao'
import {
  removeExistingData
} from '../src/database'
import {
  seedDatabaseData
} from '../migrations/seed-helper'

let apiKey

export const PORT = process.env.NODE_ENV === 'production' ? 3000 : 4000
export const baseUrl = `http://localhost:${PORT}`

export const apiPath = baseUrl + '/api/1.0/'

export async function apiGet(path, skipAuthentication) {
  if (skipAuthentication) {
    return axios.get(apiPath + path)
  }
  return axios.get(apiPath + path, { headers: { 'Authorization': apiKey }})
}

export async function apiPost(path, body, skipAuthentication) {
  if (skipAuthentication) {
    return axios.post(apiPath + path, body)
  }
  return axios.post(apiPath + path, body, {headers: { 'Authorization': apiKey }}) 
}

export async function apiPut(path, body) {
  return axios.put(apiPath + path, body, { headers: { 'Authorization': apiKey }})
}

export async function apiDelete(path) {
  return await axios.delete(apiPath + path, { headers: { 'Authorization': apiKey }})
}

export function setupTest(test) {
  const timeout = 5 * 60 * 1000

  test.timeout(timeout)

  before(async () => {
    await server.start(true, PORT)
  })

  after(async () => {
    await server.stop()
  })

  beforeEach(async () => {
    await removeExistingData()
    await seedDatabaseData(User.knex())
    let response = await apiPost('users', {
      email: 'admin@email.com',
      password: 'admin',
      admin: true,
    }, true)
    apiKey = response.data.token
  })
}