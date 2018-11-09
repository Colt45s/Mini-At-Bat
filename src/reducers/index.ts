import { combineReducers } from 'redux'
import { reducer as standingReducer, StandingState } from './standing'

export type RootState = {
  standing: StandingState
}

const rootReducer = combineReducers({
  standing: standingReducer
})

export default rootReducer
