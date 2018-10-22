import { ThunkAction } from 'redux-thunk'
import { RootState } from '../reducers'
import { Actions } from './Actions'

export type ThunkResult<R> = ThunkAction<R, RootState, any, Actions>
