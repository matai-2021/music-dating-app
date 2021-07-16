import { SET_MATCHEES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHEES:
      return action.matchees
    default:
      return state
  }
}

export default reducer
