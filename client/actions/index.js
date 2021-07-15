import { getUser, postUser } from '../apis/users'
import { getGenres } from '../apis/genres'

export const SET_USER = 'SET_USER'
export const SET_GENRES = 'SET_GENRES'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function setGenres (genres) {
  return {
    type: SET_GENRES,
    genres
  }
}

export function fetchUser () {
  return dispatch => {
    return getUser()
      .then(user => {
        dispatch(setUser(user))
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
      .then(user => {
        return null
      })
  }
}
