const request = require('supertest')

const server = require('../server')
const db = require('../db/users')

jest.mock('../db/users')

describe('PATCH /api/v1/users/:id', () => {
  it('responds with 200', () => {
    db.updateUser.mockImplementation(() => Promise.resolve())
    expect.assertions(1)
    return request(server)
      .patch('/api/v1/users/1')
      .then(res => {
        expect(res.status).toBe(200)
        return null
      })
  })
})
