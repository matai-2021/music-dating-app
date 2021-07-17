import {
  setUser,
  SET_USER
} from './index'

describe('Setting Genres', () => {
  it('Returns the correct action', () => {
    const mockUser = {
      username: 'test',
      fullname: 'testing',
      gender: 1,
      genres: [1, 3, 5]
    }
    const action = setUser(mockUser)
    expect(action.type).toBe(SET_USER)
    expect(action.user).toBe(mockUser)
  })
})
