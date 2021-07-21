import { SET_NOTIFICATIONS } from '../actions'
import notificationReducer from './notifications'

describe('Setting the Notification State', () => {
  it('Set Notifications to true', () => {
    const action = {
      type: SET_NOTIFICATIONS,
      notification: true
    }
    const newState = notificationReducer(false, action)
    expect(newState).toBe(true)
  })

  it('Set Notifications to false', () => {
    const action = {
      type: SET_NOTIFICATIONS,
      notification: false
    }
    const newState = notificationReducer(true, action)
    expect(newState).toBe(false)
  })

  it('Returns the old state if unknown action type', () => {
    const action = {
      type: 'RANDOM_ACTION',
      notification: false
    }
    const newState = notificationReducer(true, action)
    expect(newState).toBe(true)
  })
})
