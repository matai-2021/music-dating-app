const request = require('supertest')

const server = require('../server')
const db = require('../db/users')
const { applyAuthRoutes } = require('authenticare/server')

jest.mock('../db/users')
jest.mock('authenticare/server')

describe('PATCH /api/v1/users/:id', () => {
  it('responds with 200', () => {
    db.updateUser.mockImplementation(() => Promise.resolve())
    applyAuthRoutes.mockImplementation(() => null)
    return request(server)
      .patch('/api/v1/users/1')
      .then(res => {
        expect(res.status).toBe(200)
        return null
      })
  })
})
