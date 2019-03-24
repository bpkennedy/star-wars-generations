import { assert } from 'chai'
import axios from 'axios'
import { start, stop } from '../src/server.js'

describe('Server startup', function () {
  
  beforeEach(async function () {
    await start(true)
  })
  
  afterEach(async function () {
    await stop({timeout: 6000});
  })
  
  it('should validate server can run - no value, delete later', async function () {
    const response = await axios.get('http://localhost:3000/documentation')
    assert.deepEqual(response.status, 200)
  })
  
  it('should find 1 ship from the initial migration', async function () {
    const response = await axios.get('http://localhost:3000/api/1.0/ships')
    assert.deepEqual(response.status, 200)
    assert.deepEqual(response.data[0].name, 'Z-95 Headhunter')
  })
  
})