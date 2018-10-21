import * as React from 'react'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import { RootState } from '../../reducers'
import { StandingState } from '../../reducers/standing'
import { divisionNames } from '../../utils/mlbConstants'
import Overlay from '../atoms/Overlay'
import StandingTable from '../molecules/StandingTable'

const connector = connect(
  (state: RootState) => {
    return {
      standing: state.standing
    }
  },
  {}
)

const StandingView = ({ standing }: { standing: StandingState }) => {
  const isLoading = standing.isLoading

  if (isLoading) {
    return <Overlay children={<Loader size="large">Loading</Loader>} />
  }

  return (
    <>
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

export default connector(StandingView)
