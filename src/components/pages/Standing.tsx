import queryString from 'query-string'
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import standingFetchData from '../../actions/standing'
import { RootState } from '../../reducers'
import { StandingState } from '../../reducers/standing'
import StandingSearch from '../organisms/StandingSearch'
import StandingView from '../organisms/StandingView'

const connector = connect(
  (state: RootState) => {
    return {
      standing: state.standing
    }
  },
  (dispatch: any, ownProps: any) => {
    return {
      push: (year: string) => {
        const { location, history } = ownProps
        const params = new URLSearchParams(location.search)
        params.set('year', year)
        history.push({
          search: params.toString()
        })
      },
      search: () => {
        const param: any = queryString.parse(ownProps.location.search)
        dispatch(standingFetchData(param.year || currentYear))
      }
    }
  }
)

type Props = {
  standing: StandingState
  location: any
  push: (year: string) => void
  search: () => void
}

const currentYear = new Date().getFullYear().toString()

class Standing extends React.Component<Props, {}> {
  componentDidUpdate(prevProps: Props) {
    if (prevProps.location !== this.props.location) {
      this.props.search()
    }
  }

  componentDidMount() {
    this.props.search()
  }

  render() {
    const { standing, push } = this.props
    return (
      <>
        <StandingSearch selectedYear={standing.selectedYear} push={push} />
        <StandingView standing={standing} />
      </>
    )
  }
}

export default withRouter(connector(Standing))
