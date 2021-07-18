import { SET_MATCHEES, RESET_MATCH } from '../actions'
import swipeReducer from './swipe'

describe('Setting the users to swipe on', () => {
  it('Set users to swipe on', () => {
    const action = {
      type: SET_MATCHEES,
      matchees: [
        { id: 1, name: 'test123' },
        { id: 3, name: 'test456' },
        { id: 3, name: '789' }
      ]
    }
    const newState = swipeReducer([], action)
    expect(newState).not.toBe([])
    expect(newState).toHaveLength(3)
  })

  it('Reset the users matchees to false', () => {
    const oldState = [
      { id: 1, name: 'test123' },
      { id: 3, name: 'test456' },
      { id: 3, name: '789' }
    ]
    const action = {
      type: RESET_MATCH
    }
    const newState = swipeReducer(oldState, action)
    expect(newState).toBe(false)
  })

  it('returns old state on unknown action type', () => {
    const oldState = [
      { id: 1, name: 'test123' },
      { id: 3, name: 'test456' },
      { id: 3, name: '789' }
    ]
    const action = {
      type: 'RANDOM_OTHER_ACTION',
      matchees: [
        { error: 1 }
      ]
    }
    const newState = swipeReducer(oldState, action)
    expect(newState).toBe(oldState)
  })
})
