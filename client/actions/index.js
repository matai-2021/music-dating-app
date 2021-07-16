import { getUserByName, postUser } from '../apis/users'
import { getGenres } from '../apis/genres'

export const SET_USER = 'SET_USER'
export const SET_GENRES = 'SET_GENRES'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

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

export function loginFail (genres) {
  return {
    type: LOGIN_FAIL
  }
}

export function loginSuccess () {
  return {
    type: LOGIN_SUCCESS
  }
}

export function fetchUserName (username) {
  return dispatch => {
    console.log(username, 'here Mate')
    return getUserByName(username)
      .then(res => {
        dispatch(setUser(res))
        return null
      })
      .catch(() => {
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
