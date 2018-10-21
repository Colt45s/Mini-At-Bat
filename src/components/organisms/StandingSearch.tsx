import * as React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Header } from 'semantic-ui-react'
import standingFetchData from '../../actions/standing'
import { RootState } from '../../reducers'
import { StandingState } from '../../reducers/standing'

const connector = connect(
  (state: RootState) => {
    return {
      standing: state.standing
    }
  },
  (dispatch: any) => {
    return {
      serachDivisionsByYear: (
        event?: React.SyntheticEvent<HTMLElement>,
        data?: any
      ) => {
        dispatch(standingFetchData(event ? data.value : currentYear))
      }
    }
  }
)

const currentYear = new Date().getFullYear()
const YEARS_LIMIT = 10
const createYearsOption = () => {
  return Array.from(new Array(YEARS_LIMIT), (v, i) => ({
    key: i,
    value: currentYear - i,
    text: currentYear - i
  }))
}

class StandingSearch extends React.Component<{
  standing: StandingState
  serachDivisionsByYear: (
    event?: React.SyntheticEvent<HTMLElement>,
    data?: any
  ) => void
}> {
  componentDidMount() {
    this.props.serachDivisionsByYear()
  }

  render() {
    const { standing, serachDivisionsByYear } = this.props

    return (
      <>
        <Header as="h2">Standing</Header>
        <Dropdown
          selection={true}
          options={createYearsOption()}
          defaultValue={currentYear}
          value={standing.selectedYear}
          onChange={serachDivisionsByYear}
        />
      </>
    )
  }
}

export default connector(StandingSearch)
