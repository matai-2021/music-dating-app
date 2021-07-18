import { MATCH } from '../actions'
import matchReducer from './match'

describe('Setting the Genre State', () => {
  it('Set isMatch to true', () => {
    const action = {
      type: MATCH,
      isMatch: true
    }
    const newState = matchReducer(false, action)
    expect(newState).toBe(true)
  })

  it('returns old state on unknown action type', () => {
    const action = {
      type: 'RANDOM_OTHER_ACTION',
      isMatch: false
    }
    const newState = matchReducer(true, action)
    expect(newState).toBe(true)
    expect(newState).not.toBeNull()
  })
})
