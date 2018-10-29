import { Action, SEARCH_OPTION_CHANGE } from '../actions/search'

export type SearchState = {
  selectedYear: string
}

const defaultState = {
  selectedYear: ''
}

export const reducer = (state: SearchState = defaultState, action: Action) => {
  switch (action.type) {
    case SEARCH_OPTION_CHANGE:
      return {
        ...state,
        selectedYear: action.payload.selectedYear
      }
    default:
      return state
  }
}
