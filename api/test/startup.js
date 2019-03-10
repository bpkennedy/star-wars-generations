import { assert } from 'chai'
import server from '../src/server.js'

describe('Server startup', function () {
  
  after(function () {
    server.stop({timeout: 6000});
  })
  
  it('should validate if server is running', function () {
    return server.inject({
        method: 'GET',
        url: '/'
      })
      .then(
        function (response) {
          assert.deepEqual(response.statusCode, 200);
        }
      )
  })
})