import { getUserByName, postUser, getUsersToMatch, patchUserApi, createUserGenres } from '../apis/users'
import { checkForMatchApi } from '../apis/swipe'
import { getGenres } from '../apis/genres'

export const SET_USER = 'SET_USER'
export const SET_GENRES = 'SET_GENRES'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const SET_MATCHEES = 'SET_MATCHEES'
export const MATCH = 'MATCH'
export const RESET_MATCH = 'RESET_MATCH'
export const UPDATED_USER = 'UPDATED_USER'
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function updateUserInformation (user) {
  return {
    type: UPDATED_USER,
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

export function setMatch (isMatch) {
  return {
    type: MATCH,
    isMatch: isMatch
  }
}

export function setMatchees (matchees) {
  return {
    type: SET_MATCHEES,
    matchees
  }
}

export function setFalseMatch () {
  return {
    type: RESET_MATCH,
    matchees: false
  }
}

export function setNotifications () {
  return {
    type: CREATE_NOTIFICATION
  }
}

export function clearNotifications () {
  return {
    type: CLEAR_NOTIFICATION
  }
}

export function fetchUserName (user) {
  return dispatch => {
    return getUserByName(user.username)
      .then(res => {
        dispatch(setUser(res))
        return null
      })
      .catch(error => {
        console.error(error)
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
    dispatch(setFalseMatch())
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
      .catch(console.error)
  }
}

export function checkForMatch (swipe) {
  return dispatch => {
    return checkForMatchApi(swipe)
      .then((res) => {
        dispatch(setMatch(res))
        return null
      })
  }
}

export function invalidUsername () {
  return dispatch => {
    return dispatch(loginFail())
  }
}

export function pathUserInformation (user) {
  return dispatch => {
    return patchUserApi(user)
      .then(() => {
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function setUsersGenres (user, genres) {
  return dispatch => {
    return createUserGenres(user, genres)
      .then(() => {
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function createUserNotification () {
  return dispatch => {
    return dispatch(setNotifications())
  }
}

export function clearUserNotification () {
  return dispatch => {
    return dispatch(clearNotifications())
  }
}
