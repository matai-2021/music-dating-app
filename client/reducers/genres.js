import { SET_GENRES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return action.user
    default:
      return state
  }
}

export default reducer
