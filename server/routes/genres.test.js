const request = require('supertest')

const server = require('../server')
const db = require('../db/genres')

jest.mock('../db/genres')

describe('GET /api/v1/genres/', () => {
  it('responds with a list of genres', () => {
    const genres = [{
      id: 1,
      name: 'dummy1'
    }, {
      id: 2,
      name: 'dummy2'
    }]
    db.getGenres.mockImplementation(() => Promise.resolve(genres))
    expect.assertions(3)
    return request(server)
      .get('/api/v1/genres/')
      .then(res => {
        expect(res.body).toHaveLength(2)
        expect(res.body).toContainEqual({ id: 1, name: 'dummy1' })
        expect(res.body).toContainEqual({ id: 2, name: 'dummy2' })
        return null
      })
  })
})
