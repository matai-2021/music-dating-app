import { SET_MATCHEES, RESET_MATCH } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHEES:
      return action.matchees
    case RESET_MATCH:
      return false
    default:
      return state
  }
}

export default reducer
