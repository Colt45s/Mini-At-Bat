import {
  STANDING_FETCH_DATA_SUCCESS,
  STANDING_HAS_ERRORED,
  STANDING_IS_LOADING
} from '../actions/standing'
import { Division } from '../models/division'

export type StandingState = {
  divisionStandings: Division[]
  isLoading: boolean
  err?: string
}

const defaultState = {
  divisionStandings: [],
  isLoading: false,
  err: ''
}

export const reducer = (state: StandingState = defaultState, action: any) => {
  switch (action.type) {
    case STANDING_HAS_ERRORED:
      return {
        ...state,
        err: action.payload.err
      }
    case STANDING_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case STANDING_FETCH_DATA_SUCCESS:
      const divisions = action.payload.divisions
        .slice()
        .sort((prev: any, next: any) => prev.division.id - next.division.id)

      return {
        ...state,
        isLoading: false,
        divisionStandings: divisions
      }
    default:
      return state
  }
}
