import * as React from 'react'
import { connect } from 'react-redux'
import standingFetchData from '../../actions/standing'
import { RootState } from '../../reducers'
import { StandingState } from '../../reducers/standing'
import Overlay from '../atoms/Overlay'
import { Loader, Header } from 'semantic-ui-react'
import { divisionNames } from '../../utils/mlbConstants'
import StandingTable from '../molecules/StandingTable'

const connector = connect(
  (state: RootState) => {
    return {
      standing: state.standing
    }
  },
  (dispatch: any) => {
    return {
      onLoad: () => dispatch(standingFetchData())
    }
  }
)

class StandingView extends React.Component<{
  standing: StandingState
  onLoad: () => void
}> {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { standing } = this.props
    const { isLoading } = standing

    if (isLoading) {
      return <Overlay children={<Loader size="large">Loading</Loader>} />
    }

    return (
      <>
        <Header as="h2">Standing</Header>
        {standing.divisionStandings.map(d => (
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

export default connector(StandingView)
