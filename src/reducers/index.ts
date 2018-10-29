import { combineReducers } from 'redux'
import { reducer as searchReducer, SearchState } from './search'
import { reducer as standingReducer, StandingState } from './standing'

export type RootState = {
  standing: StandingState
  search: SearchState
}

const rootReducer = combineReducers({
  standing: standingReducer,
  search: searchReducer
})

export default rootReducer
