import api from '../api'
import { ThunkResult } from '../types/ThunkResult'
import { Division } from '../types/division'

export type Action = ErrorAction | LoadingAction | SuccessAction

type ErrorAction = {
  type: 'STANDING_HAS_ERRORED'
}

type LoadingAction = {
  type: 'STANDING_IS_LOADING'
}

type SuccessAction = {
  type: 'STANDING_FETCH_DATA_SUCCESS'
  payload: {
    selectedYear: number
    divisions: Division[]
  }
}

export const STANDING_HAS_ERRORED = 'STANDING_HAS_ERRORED'
const standingHasErrored = (): ErrorAction => ({
  type: STANDING_HAS_ERRORED
})

export const STANDING_IS_LOADING = 'STANDING_IS_LOADING'
const standingIsLoading = (): LoadingAction => ({
  type: STANDING_IS_LOADING
})

export const STANDING_FETCH_DATA_SUCCESS = 'STANDING_FETCH_DATA_SUCCESS'
const standingFetchDataSuccess = (
  selectedYear: number,
  divisions: Division[]
): SuccessAction => ({
  type: STANDING_FETCH_DATA_SUCCESS,
  payload: {
    selectedYear,
    divisions
  }
})

export const mlbLeagueIds = {
  alId: 103,
  nlId: 104
}

const standingFetchData = (year: number): ThunkResult<Promise<void>> => {
  return async dispatch => {
    try {
      dispatch(standingIsLoading())

      const alStanding = await api.Standing.getStanding(mlbLeagueIds.alId, year)
      const nlStanding = await api.Standing.getStanding(mlbLeagueIds.nlId, year)
      const divisions = alStanding.data.records.concat(nlStanding.data.records)
      dispatch(standingFetchDataSuccess(year, divisions))
    } catch (err) {
      dispatch(standingHasErrored())
    }
  }
}

export default standingFetchData
