import errorReducer from './error'
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions'

describe('Loggin in and out reducer', () => {
  it('On login fail set state to true', () => {
    const action = {
      type: LOGIN_FAIL
    }
    const newState = errorReducer(false, action)
    expect(newState).toBe(true)
  })

  it('on login success set error to false', () => {
    const action = {
      type: LOGIN_SUCCESS
    }
    const newState = errorReducer(true, action)
    expect(newState).toBe(false)
  })

  it('on logout reset the state to false', () => {
    const action = {
      type: LOGOUT
    }
    const newState = errorReducer(true, action)
    expect(newState).toBe(false)
  })

  it('returns old state on unknown action type', () => {
    const action = {
      type: 'RANDOM_OTHER_ACTION'
    }
    const newState = errorReducer(null, action)
    expect(newState).toBeNull()
  })
})
