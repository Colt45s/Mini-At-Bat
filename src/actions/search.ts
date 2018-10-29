export type Action = SearchOptionChangeAction

type SearchOptionChangeAction = {
  type: 'SEARCH_OPTION_CHANGE'
  payload: {
    selectedYear: string
  }
}

export const SEARCH_OPTION_CHANGE = 'SEARCH_OPTION_CHANGE'
const searchOptionChange = (year: string): SearchOptionChangeAction => ({
  type: SEARCH_OPTION_CHANGE,
  payload: {
    selectedYear: year
  }
})

export default searchOptionChange
