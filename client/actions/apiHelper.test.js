import {
  logoutUser, LOGOUT, SET_NOTIFICATIONS, MATCH, RESET_MATCH
} from './index'
import { dispatch } from '../store'

jest.mock('../store')

afterEach(() => dispatch.mockClear())

describe('User Logs in', () => {
  it('Calls set user on succesfull login', () => {
    logoutUser()
    expect(dispatch).toHaveBeenCalledWith({ type: LOGOUT })
    expect(dispatch).toHaveBeenCalledWith({ type: SET_NOTIFICATIONS, notification: false })
    expect(dispatch).toHaveBeenCalledWith({ type: MATCH, isMatch: false })
    expect(dispatch).toHaveBeenCalledWith({ type: RESET_MATCH, matchees: false })
  })
})
