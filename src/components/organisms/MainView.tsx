import * as React from 'react'
import { connect } from 'react-redux'
import standingFetchData from '../../actions/standing'
import styled from 'styled-components'
import { RootState } from '../../reducers'
import { StandingState } from '../../reducers/standing'
import DivisionTab from '../molecules/DivisionTab'

const MainWrapper = styled.div`
  width: 100%;
`
MainWrapper.displayName = 'MainWrapper'

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

class MainView extends React.Component<{
  standing: StandingState
  onLoad: () => void
}> {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { standing } = this.props
    return (
      <MainWrapper>
        <DivisionTab
          divisions={standing.divisionStandings}
          isLoading={standing.isLoading}
        />
      </MainWrapper>
    )
  }
}

export default connector(MainView)
