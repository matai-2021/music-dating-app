import { SET_GENRES } from '../actions'
import genresReducer from './genres'

describe('Setting the Genre State', () => {
  it('Set the genres when provided', () => {
    const action = {
      type: SET_GENRES,
      genres: [
        { id: 1, name: 'rock' },
        { id: 2, name: 'country' },
        { id: 3, name: 'pop' },
        { id: 4, name: 'metal' }
      ]
    }
    const newState = genresReducer([], action)
    expect(newState).not.toBe([])
    expect(newState).toHaveLength(4)
  })

  it('returns old state on unknown action type', () => {
    const oldGenres = [
      { id: 1, name: 'rock' },
      { id: 2, name: 'country' },
      { id: 3, name: 'pop' },
      { id: 4, name: 'metal' }
    ]
    const action = {
      type: 'RANDOM_OTHER_ACTION'
    }
    const newState = genresReducer(oldGenres, action)
    expect(newState).toBe(oldGenres)
    expect(newState).not.toBeNull()
  })
})
