import { getUser } from '../apis/users'

export const SET_USER = 'SET_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    user
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
