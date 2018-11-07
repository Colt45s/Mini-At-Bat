import queryString from 'query-string'
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import searchOptionChange from '../../actions/search'
import standingFetchData from '../../actions/standing'
import { RootState } from '../../reducers'
import { StandingState } from '../../reducers/standing'
import { divisionNames } from '../../utils/mlbConstants'
import Overlay from '../atoms/Overlay'
import StandingTable from '../molecules/StandingTable'

type Props = {
  standing: StandingState
  location: any
  search: () => void
}

const currentYear = new Date().getFullYear().toString()

const connector = connect(
  (state: RootState) => {
    return {
      standing: state.standing
    }
  },
  (dispatch: any, ownProps: any) => {
    return {
      search: () => {
        const year: any =
          queryString.parse(ownProps.location.search).year || currentYear
        dispatch(searchOptionChange(year))
        dispatch(standingFetchData(year))
      }
    }
  }
)

class StandingView extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (prevProps.location !== this.props.location) {
      this.props.search()
    }
  }

  componentDidMount() {
    this.props.search()
  }

  render() {
    const { divisionStandings, isLoading } = this.props.standing

    if (isLoading) {
      return <Overlay children={<Loader size="large">Loading</Loader>} />
    }

    return (
      <>
        {divisionStandings.map(d => (
          <StandingTable
            key={d.division.id}
            teamRecords={d.teamRecords}
            divisionName={divisionNames[d.division.id]}
          />
        ))}
      </>
    )
  }
}

export default withRouter(connector(StandingView))
