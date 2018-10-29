import {
  Action,
  STANDING_FETCH_DATA_SUCCESS,
  STANDING_HAS_ERRORED,
  STANDING_IS_LOADING
} from '../actions/standing'
import { Division } from '../types/division'

export type StandingState = {
  divisionStandings: Division[]
  isLoading: boolean
  err: boolean
}

const defaultState = {
  divisionStandings: [],
  isLoading: false,
  err: false
}

export const reducer = (
  state: StandingState = defaultState,
  action: Action
) => {
  switch (action.type) {
    case STANDING_HAS_ERRORED:
      return {
        ...state,
        err: true
      }
    case STANDING_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case STANDING_FETCH_DATA_SUCCESS:
      const divisions = action.payload.divisions
        .slice()
        .sort((prev, next) => prev.division.id - next.division.id)

      return {
        ...state,
        isLoading: false,
        err: false,
        divisionStandings: divisions
      }
    default:
      return state
  }
}
