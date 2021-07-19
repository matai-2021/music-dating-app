import { MATCH } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MATCH:
      return action.isMatch
    default:
      return state
  }
}

export default reducer
