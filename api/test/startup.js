import { assert } from 'chai'
import { server, start, stop } from '../src/server.js'

const apiPath = 'http://localhost:3000/api/1.0/'

describe('Server startup', function () {

  beforeEach(function () {
    start()
  })

  after(function () {
    stop({timeout: 1000})
  })

  it('should validate if server is running', async function () {
    const response = await server.inject({method: 'GET', url: '/'})
    assert.deepEqual(response.statusCode, 404)
    console.log(response.statusCode)
  })
})
