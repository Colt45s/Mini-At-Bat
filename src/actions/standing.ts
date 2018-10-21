import api from '../api'
import { Division } from '../models/division'

export const STANDING_HAS_ERRORED = 'STANDING_HAS_ERRORED'
const standingHasErrored = (err: string) => ({
  type: STANDING_HAS_ERRORED,
  payload: {
    err
  }
})

export const STANDING_IS_LOADING = 'STANDING_IS_LOADING'
const standingIsLoading = () => ({
  type: STANDING_IS_LOADING
})

export const STANDING_FETCH_DATA_SUCCESS = 'STANDING_FETCH_DATA_SUCCESS'
const standingFetchDataSuccess = (
  selectedYear: number,
  divisions: Division[]
) => ({
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

const standingFetchData = (year: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(standingIsLoading())

      const alStanding = await api.Standing.getStanding(mlbLeagueIds.alId, year)
      const nlStanding = await api.Standing.getStanding(mlbLeagueIds.nlId, year)
      const divisions = alStanding.data.records.concat(nlStanding.data.records)
      dispatch(standingFetchDataSuccess(year, divisions))
    } catch (err) {
      dispatch(standingHasErrored(''))
    }
  }
}

export default standingFetchData
