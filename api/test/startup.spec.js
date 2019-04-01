import { assert } from 'chai'
import axios from 'axios'
import {
  setupTest,
  baseUrl,
  apiGet
 } from './server-test-fixture'

describe('Server startup', function () {
  setupTest(this)
  
  it('should find 1 ship from the initial migration', async () => {
    const response = await apiGet('ships')
    assert.deepEqual(response.status, 200)
    assert.deepEqual(response.data[0].name, 'Z-95 Headhunter')
  })
  
  it('should validate server can run - no value, delete later', async () => {
    const response = await axios.get(baseUrl + '/documentation')
    assert.deepEqual(response.status, 200)
  })
  
})