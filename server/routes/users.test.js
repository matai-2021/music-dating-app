const request = require('supertest')

const server = require('../server')
const db = require('../db/users')
const chatengine = require('../apis/chatengine')

jest.mock('../db/users')
jest.mock('../apis/chatengine')

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

describe('GET /api/v1/users/:id', () => {
  it('returns a user', () => {
    const user = {
      username: 'username',
      fullname: 'fullname',
      genres: [{ id: 1, name: 'genre' }],
      imageUrl: 'imageurl',
      description: 'description',
      genderId: 1,
      genderName: 'gendername'
    }
    db.getUserById.mockImplementation(() => Promise.resolve(user))
    db.getUserGenres.mockImplementation(() => Promise.resolve(user.genres))
    expect.assertions(8)
    return request(server)
      .get('/api/v1/users/1')
      .then(res => {
        expect(res.body.username).toBe('username')
        expect(res.body.fullname).toBe('fullname')
        expect(res.body.imageUrl).toBe('imageurl')
        expect(res.body.description).toBe('description')
        expect(res.body.genderId).toBe(1)
        expect(res.body.genderName).toBe('gendername')
        expect(res.body.genres).toHaveLength(1)
        expect(res.body.genres).toContainEqual({ id: 1, name: 'genre' })
        return null
      })
  })
})

describe('POST /api/v1/users/register', () => {
  it('returns the id of the created usr', () => {
    const id = 1
    const user = {
      username: 'username',
      fullname: 'fullname',
      genres: [{ id: 1, name: 'genre' }],
      imageUrl: 'imageurl',
      description: 'description',
      genderId: 1,
      genderName: 'gendername'
    }

    db.addUser.mockImplementation(() => Promise.resolve([id]))
    db.addGenres.mockImplementation(() => Promise.resolve())
    expect.assertions(1)
    return request(server)
      .post('/api/v1/users/register')
      .send(user)
      .then(res => {
        expect(res.body.id).toBe(1)
        return null
      })
  })
})

describe('GET /api/v1/users/username/:username', () => {
  it('returns a users info based off their username', () => {
    const user = {
      id: 1,
      username: 'username',
      fullname: 'fullname',
      description: 'description',
      genres: [{ id: 1, name: 'genre' }],
      genderId: 1,
      genderName: 'gendername',
      image_url: 'image_url'
    }

    db.getUser.mockImplementation(() => Promise.resolve(user))
    db.getGender.mockImplementation(() => Promise.resolve({ genderName: user.genderName, genderId: user.genderId }))
    db.getUserGenres.mockImplementation(() => Promise.resolve(user.genres))
    expect.assertions(9)
    return request(server)
      .get('/api/v1/users/username/username')
      .then(res => {
        expect(res.body.id).toBe(1)
        expect(res.body.username).toBe('username')
        expect(res.body.fullname).toBe('fullname')
        expect(res.body.description).toBe('description')
        expect(res.body.genres).toContainEqual({ id: 1, name: 'genre' })
        expect(res.body.genres).toHaveLength(1)
        expect(res.body.genderId).toBe(1)
        expect(res.body.genderName).toBe('gendername')
        expect(res.body.imageUrl).toBe('image_url')
        return null
      })
  })
})

describe('POST /api/v1/users/swipe', () => {
  it('should return false', () => {
    const body = {
      userId: 1,
      receiverId: 6,
      isMatch: false
    }

    db.createSwipe.mockImplementation(() => Promise.resolve())
    return request(server)
      .post('/api/v1/users/swipe')
      .send(body)
      .then((res) => {
        expect(res.body.isMatch).toBeFalsy()
        return null
      })
  })

  it('should return true', () => {
    const body = {
      userId: 1,
      receiverId: 2,
      isMatch: true
    }

    db.createSwipe.mockImplementation(() => Promise.resolve())
    db.varifyMatch.mockImplementation(() => Promise.resolve(true))
    chatengine.createChatRoom.mockImplementation(() => Promise.resolve())
    return request(server)
      .post('/api/v1/users/swipe')
      .send(body)
      .then((res) => {
        expect(res.body.isMatch).toBeTruthy()
        return null
      })
  })
})
