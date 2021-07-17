const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./users')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('gerUser', () => {
  it('returns the choosen user', () => {
    return db.getUser('ahmad', testDb)
      .then((event) => {
        expect(event.id).toBe(1)
        expect(event.fullname).toBe('ahmad anwar')
        expect(event.description).toMatch('DJ')
        expect(event.hash).toBeDefined()
        expect(event.gender_id).toBe('1')
        return null
      })
  })
})
