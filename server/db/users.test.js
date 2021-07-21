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
    expect.assertions(5)
    return db.getUser('ahmadanwar', testDb)
      .then((user) => {
        expect(user.id).toBe(1)
        expect(user.fullname).toBe('Ahmad Anwar')
        expect(user.description).toMatch('headset')
        expect(user.hash).toBeDefined()
        expect(user.gender_id).toBe('1')
        return null
      })
  })
})

describe('getUserById', () => {
  it('returns the choosen user', () => {
    expect.assertions(5)
    return db.getUserById(1, testDb)
      .then((user) => {
        expect(user.id).toBe(1)
        expect(user.fullname).toBe('Ahmad Anwar')
        expect(user.description).toMatch('headset')
        expect(user.genderName).toBe('Male')
        expect(user.genderId).toBe(1)
        return null
      })
  })
})

describe('getUserGenres', () => {
  it('return genres', () => {
    expect.assertions(3)
    return db.getUserGenres(1, testDb)
      .then((genres) => {
        expect(genres).toHaveLength(3)
        expect(genres).toContainEqual({ genreId: 3, name: 'Electronic' })
        expect(genres).toContainEqual({ genreId: 8, name: 'Ambient' })
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
    expect.assertions(5)
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

describe('updateUser', () => {
  it('should update the user', () => {
    const user = {
      username: 'newusername',
      fullname: 'newfullname',
      description: 'newdescription',
      gender_id: 2,
      image_url: 'newimageurl'
    }

    expect.assertions(5)
    return db.updateUser(1, user, testDb)
      .then(() => db.getUser(user.username, testDb))
      .then((updatedUser) => {
        expect(updatedUser.username).toBe('newusername')
        expect(updatedUser.fullname).toBe('newfullname')
        expect(updatedUser.description).toBe('newdescription')
        expect(updatedUser.gender_id).toBe('2')
        expect(updatedUser.image_url).toBe('newimageurl')
        return null
      })
  })
})

describe('addGenres', () => {
  it('should add genre for a given user', () => {
    const userId = 1
    const genreIds = [2, 4]
    expect.assertions(3)
    return db.addGenres(userId, genreIds, testDb)
      .then(() => db.getUserGenres(userId, testDb))
      .then(genres => {
        expect(genres).toHaveLength(5)
        expect(genres).toContainEqual({ genreId: 2, name: 'Country' })
        expect(genres).toContainEqual({ genreId: 4, name: 'Euro-Dance' })
        return null
      })
  })
})

describe('deleteUserGenres', () => {
  it('should delete all genres for a given user', () => {
    const userId = 1
    return db.deleteUserGenres(userId, testDb)
      .then(() => db.getUserGenres(userId, testDb))
      .then(genres => {
        expect(genres).toHaveLength(0)
        return null
      })
  })
})

describe('userExists', () => {
  it('should return true', () => {
    const username = 'ahmadanwar'
    return db.userExists(username, testDb)
      .then(exists => {
        expect(exists).toBeTruthy()
        return null
      })
  })
  it('should return false', () => {
    const username = 'username that does not exist'
    return db.userExists(username, testDb)
      .then(exists => {
        expect(exists).toBeFalsy()
        return null
      })
  })
})

describe('createSwipe', () => {
  it('should create a record', () => {
    const userId = 1
    const receiverId = 2
    return db.createSwipe(userId, receiverId, true, testDb)
      .then(() => {
        return testDb('users_swipe')
          .where('sender_id', userId)
          .where('receiver_id', receiverId)
          .select()
      })
      .then(swipes => {
        expect(swipes).toHaveLength(2)
        return null
      })
  })
})

describe('getGender', () => {
  it('should return gender', () => {
    const userId = 1
    return db.getGender(userId, testDb)
      .then(gender => {
        expect(gender).toEqual({ genderId: 1, genderName: 'Male' })
        return null
      })
  })
})
