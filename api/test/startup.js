import { assert } from 'chai'
import axios from 'axios'
import { start, stop } from '../src/index.js'

const apiPath = 'http://localhost:3000/api/1.0/'

export async function apiGet(path) {
  return await axios.get(apiPath + path)
}

export async function apiPost(path) {
  return await axios.post(apiPath + path)
}

export async function apiPut(path) {
  return await axios.put(apiPath + path)
}

export async function apiDelete(path) {
  return await axios.delete(apiPath + path)
}

describe('Server startup', function () {
  
  beforeEach(function () {
    start()
  })
  
  after(function () {
    stop({timeout: 6000});
  })
  
  it('should validate if server is running', async function () {
    try {
      const response = await apiGet('/') 
    } catch (error) {
      console.log(error.message)
    }
    assert.deepEqual(response.statusCode, 200);
  })
})