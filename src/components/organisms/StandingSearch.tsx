import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import { RootState } from '../../reducers'
import { SearchState } from '../../reducers/search'

const currentYear = new Date().getFullYear()
const YEARS_LIMIT = 10
const createYearsOption = () => {
  return Array.from(new Array(YEARS_LIMIT), (v, i) => ({
    key: i,
    value: currentYear - i,
    text: currentYear - i
  }))
}

type Props = {
  search: SearchState
  push: (year: string) => void
}

type State = {
  selectedYear: string
}

const connector = connect(
  (state: RootState) => {
    return {
      search: state.search
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
      }
    }
  }
)

class StandingSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedYear: props.search.selectedYear
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.search.selectedYear !== this.props.search.selectedYear) {
      this.setState({ selectedYear: this.props.search.selectedYear })
    }
  }

  render() {
    return (
      <>
        <Header as="h2">Standing</Header>
        <select
          style={{
            fontFamily: 'Lato,Helvetica Neue,Arial,Helvetica,sans-serif'
          }}
          value={this.state.selectedYear}
          onChange={e => {
            this.setState({ selectedYear: e.target.value }, () => {
              this.props.push(this.state.selectedYear)
            })
          }}
        >
          {createYearsOption().map(o => (
            <option key={o.key} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>
      </>
    )
  }
}

export default withRouter(connector(StandingSearch))
