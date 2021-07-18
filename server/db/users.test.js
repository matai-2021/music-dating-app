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

describe('getUser', () => {
  it('returns the choosen user', () => {
    return db.getUser('ahmadanwar', testDb)
      .then((user) => {
        expect(user.id).toBe(1)
        expect(user.fullname).toBe('Ahmad Anwar')
        expect(user.description).toMatch('DJ')
        expect(user.hash).toBeDefined()
        expect(user.gender_id).toBe('1')
        return null
      })
  })
})

describe('getUserById', () => {
  it('returns the choosen user', () => {
    return db.getUserById(1, testDb)
      .then((user) => {
        expect(user.id).toBe(1)
        expect(user.fullname).toBe('Ahmad Anwar')
        expect(user.description).toMatch('DJ')
        expect(user.genderName).toBe('Male')
        expect(user.genderId).toBe(1)
        return null
      })
  })
})

describe('getUserGenres', () => {
  it('return genres', () => {
    return db.getUserGenres(1, testDb)
      .then((genres) => {
        expect(genres).toHaveLength(2)
        expect(genres).toContainEqual({ genreId: 3, name: 'Electronic' })
        expect(genres).toContainEqual({ genreId: 7, name: 'Hip hop' })
        return null
      })
  })
})
