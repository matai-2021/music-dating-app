import { SET_NOTIFICATIONS } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return action.notification
    default:
      return state
  }
}

export default reducer
