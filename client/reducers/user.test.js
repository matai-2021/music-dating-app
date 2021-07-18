import { expect } from '@jest/globals'
import { SET_USER, LOGOUT } from '../actions'
import userReducer from './user'

describe('Setting the user State', () => {
  it('Add a User to the state', () => {
    const newUser = {
      id: 2,
      username: 'testing123',
      genre: [1, 4],
      description: 'this is great'
    }
    const action = {
      type: SET_USER,
      user: {
        id: 2,
        username: 'testing123',
        genre: [1, 4],
        description: 'this is great'
      }
    }
    const newState = userReducer(newUser, action)
    expect(newState).toStrictEqual(newUser)
  })

  it('Updates the user state', () => {
    const oldUser = {
      id: 5,
      username: 'badUser',
      genre: [1, 4],
      description: 'this is bad'
    }
    const action = {
      type: SET_USER,
      user: {
        id: 2,
        username: 'testing123',
        genre: [1, 4],
        description: 'this is great'
      }
    }
    const newState = userReducer(oldUser, action)
    expect(newState).not.toBe(oldUser)
    expect(newState.id).toBe(2)
  })

  it('User logs out removes the state', () => {
    const oldUser = {
      id: 5,
      username: 'badUser',
      genre: [1, 4],
      description: 'this is bad'
    }
    const action = {
      type: LOGOUT
    }
    const newState = userReducer(oldUser, action)
    expect(newState).not.toBe(oldUser)
    expect(newState).toStrictEqual({})
  })

  it('returns old state on unknown action type', () => {
    const oldUser = {
      id: 5,
      username: 'goodUser',
      genre: [1, 4],
      description: 'this is the good user'
    }
    const action = {
      type: 'RANDOM_OTHER_ACTION',
      user: {
        id: 2,
        username: 'testing123',
        genre: [1, 4],
        description: 'this is great'
      }
    }
    const newState = userReducer(oldUser, action)
    expect(newState).toBe(oldUser)
    expect(newState.id).toBe(5)
  })
})
