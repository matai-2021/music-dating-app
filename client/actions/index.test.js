import {
  setUser,
  SET_USER,
  LOGOUT,
  resetUser,
  setGenres,
  SET_GENRES,
  loginFail,
  LOGIN_FAIL,
  loginSuccess,
  LOGIN_SUCCESS,
  setMatch,
  MATCH,
  setMatchees,
  SET_MATCHEES,
  setFalseMatch,
  RESET_MATCH,
  UPDATED_USER,
  updateUserInformation

} from './index'

describe('Setting User', () => {
  it('Returns the correct action creator', () => {
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

describe('Reset the user state to null', () => {
  it('Returns the correct action', () => {
    const action = resetUser()
    expect(action.type).toBe(LOGOUT)
  })
})

describe('Setting Genres', () => {
  it('Returns the correct action creator', () => {
    const mockGenres = [
      { id: 1, name: 'Rock' },
      { id: 2, name: 'Pop' },
      { id: 3, name: 'Country' },
      { id: 4, name: 'Metal' }
    ]
    const action = setGenres(mockGenres)
    expect(action.type).toBe(SET_GENRES)
    expect(action.genres).toBe(mockGenres)
  })
})

describe('User not able to login', () => {
  it('Returns the correct action', () => {
    const action = loginFail()
    expect(action.type).toBe(LOGIN_FAIL)
  })
})

describe('User Logged in', () => {
  it('Returns the correct action', () => {
    const action = loginSuccess()
    expect(action.type).toBe(LOGIN_SUCCESS)
  })
})

describe('Last swipe a match', () => {
  it('Returns a true or false', () => {
    const mockIsMatch = { isMatch: true }
    const action = setMatch(mockIsMatch)
    expect(action.type).toBe(MATCH)
    expect(action.isMatch).toBe(mockIsMatch)
  })
})

describe('Sets the potential users to match on', () => {
  it('Returns the the array of users', () => {
    const mockMatchees = [
      { id: 2, username: 'Bob', genderId: 2 },
      { id: 3, username: 'Bob', genderId: 2 },
      { id: 4, username: 'Bob', genderId: 2 }
    ]
    const action = setMatchees(mockMatchees)
    expect(action.type).toBe(SET_MATCHEES)
    expect(action.matchees).toBe(mockMatchees)
  })
})

describe('Resets the isMatch for when users signout', () => {
  it('Returns false', () => {
    const action = setFalseMatch()
    expect(action.type).toBe(RESET_MATCH)
    expect(action.matchees).toBe(false)
  })
})

describe('Dispatches the action for changing the user information', () => {
  it('Returns the object passed to it', () => {
    const mockUserChange = [
      { id: 4, username: 'Testing', genderId: 2, description: 'Hello this is a test' }
    ]
    const action = updateUserInformation(mockUserChange)
    expect(action.type).toBe(UPDATED_USER)
    expect(action.user).toBe(mockUserChange)
    expect(action.user).toHaveLength(1)
  })
})
