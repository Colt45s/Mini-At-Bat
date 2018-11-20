import React from 'react'
import { lifecycle } from 'recompose'
import { Loader } from 'semantic-ui-react'
import standingFetchData from '../../actions/standing'
import { StandingState } from '../../reducers/standing'
import getSelectedYear from '../../utils/getSelectedYear'
import { divisionNames } from '../../utils/mlbConstants'
import routerEnhancer from '../../utils/routerEnhancer'
import Overlay from '../atoms/Overlay'
import StandingTable from '../molecules/StandingTable'

type Props = {
  standing: StandingState
  location: any
  search: () => void
}

export default routerEnhancer<Props>(
  state => {
    return {
      standing: state.standing
    }
  },
  (dispatch, ownProps) => {
    return {
      search: () => {
        const year = getSelectedYear(ownProps.location.search)
        dispatch(standingFetchData(year))
      }
    }
  },
  lifecycle({
    componentDidUpdate(prevProps: Props) {
      if (prevProps.location !== this.props.location) {
        this.props.search()
      }
    },
    componentDidMount() {
      this.props.search()
    }
  })
)((props: Props) => {
  const { divisionStandings, isLoading } = props.standing

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
})
