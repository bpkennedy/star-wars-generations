import { assert } from 'chai'
import {
  setupTest,
  apiPost,
 } from './server-test-fixture'

describe('Authentication', function () {
  setupTest(this)
  
  it('can create a new user', async () => {
    const response = await apiPost('users', {
      email: 'test77@email.com',
      password: 'testpass',
      admin: false,
    })
    assert.deepEqual(response.status, 201)
    assert.isNotEmpty(response.data.token)
  })
  
  it('will 400 if invalid email or invalid password are sent', async () => {
    try {
      await apiPost('users', {
        email: 'test77',
        password: 'testpass',
        admin: false,
      }) 
    } catch (error) {
      assert.deepEqual(error.response.status, 400)
      assert.deepEqual(error.response.data.message, 'Invalid request payload input')
    }
    try {
      await apiPost('users', {
        email: 'test77@email.com',
        password: '',
        admin: false,
      }) 
    } catch (error) {
      assert.deepEqual(error.response.status, 400)
      assert.deepEqual(error.response.data.message, 'Invalid request payload input')
    }
  })
  
  it('can login a user by email and password', async () => {
    const createResponse = await apiPost('users', {
      email: 'test77@email.com',
      password: 'testpass',
      admin: false,
    })
    assert.deepEqual(createResponse.status, 201)
    
    const loginResponse = await apiPost('login', {
      email: 'test77@email.com',
      password: 'testpass',
    })
    assert.deepEqual(loginResponse.status, 200)
    assert.isNotEmpty(loginResponse.data.token)
  })
})