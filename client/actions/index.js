import { getUserByName, postUser, getUsersToMatch } from '../apis/users'
import { getGenres } from '../apis/genres'

export const SET_USER = 'SET_USER'
export const SET_GENRES = 'SET_GENRES'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const SET_MATCHEES = 'SET_MATCHEES'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function resetUser () {
  return {
    type: LOGOUT
  }
}
export function setGenres (genres) {
  return {
    type: SET_GENRES,
    genres
  }
}

export function loginFail () {
  return {
    type: LOGIN_FAIL
  }
}

export function loginSuccess () {
  return {
    type: LOGIN_SUCCESS
  }
}

export function setMatchees (matchees) {
  return {
    type: SET_MATCHEES,
    matchees
  }
}

export function fetchUserName (username) {
  return dispatch => {
    return getUserByName(username)
      .then(res => {
        console.log('logged in')
        dispatch(setUser(res))
        return null
      })
      .catch(() => {
        console.log('Erorr with logging in')
        dispatch(loginFail())
        return null
      })
  }
}

export function fetchGenres () {
  return dispatch => {
    return getGenres()
      .then(genres => {
        dispatch(setGenres(genres))
        return null
      })
  }
}

export function createUser (user) {
  return dispatch => {
    return postUser(user)
      .then(() => {
        dispatch(fetchUserName(user))
        return null
      })
  }
}

export function logoutUser () {
  return dispatch => {
    return dispatch(resetUser())
  }
}

export function fetchUnMatchedUsers (user) {
  return dispatch => {
    return getUsersToMatch(user.id)
      .then((res) => {
        dispatch(setMatchees(res))
        return null
      })
  }
}
