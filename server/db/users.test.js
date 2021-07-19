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

describe('addUser', () => {
  it('returns an error', () => {
    const user = {
      username: 'ahmadanwar'
    }
    return db.addUser(user, testDb)
      .catch(error => {
        expect(error).toStrictEqual(Error('User already exists'))
      })
  })

  it('returns a new user', () => {
    const user = {
      username: 'newusername',
      fullname: 'fullname',
      description: 'description',
      gender_id: 1,
      image_url: 'imageurl'
    }
    return db.addUser(user, testDb)
      .then(() => db.getUser(user.username, testDb))
      .then(newUser => {
        expect(newUser.username).toBe('newusername')
        expect(newUser.fullname).toBe('fullname')
        expect(newUser.description).toBe('description')
        expect(newUser.gender_id).toBe('1')
        expect(newUser.image_url).toBe('imageurl')
        return null
      })
  })
})
