import { assert } from 'chai'
import axios from 'axios'
import * as server from '../src/server.js'
const PORT = process.env.NODE_ENV === 'production' ? 3000 : 4000
const baseUrl = `http://localhost:${PORT}`

describe('Server startup', function () {
  
  beforeEach(async function () {
    await server.start(true, PORT)
  })
  
  afterEach(async function () {
    await server.stop();
  })
  
  it('should find 1 ship from the initial migration', async function () {
    const response = await axios.get(baseUrl + '/api/1.0/ships')
    assert.deepEqual(response.status, 200)
    assert.deepEqual(response.data[0].name, 'Z-95 Headhunter')
  })
  
  it('should validate server can run - no value, delete later', async function () {
    const response = await axios.get(baseUrl + '/documentation')
    assert.deepEqual(response.status, 200)
  })
  
})