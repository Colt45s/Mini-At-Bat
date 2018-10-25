import * as React from 'react'
import { Header } from 'semantic-ui-react'

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
  selectedYear: string
  push: (year: string) => void
}

type State = {
  searchYear: string
}

class StandingSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searchYear: ''
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.selectedYear !== this.props.selectedYear) {
      this.setState({ searchYear: this.props.selectedYear })
    }
  }

  render() {
    return (
      <>
        <Header as="h2">Standing</Header>
        <select
          value={this.state.searchYear}
          onChange={e => {
            this.setState({ searchYear: e.target.value }, () => {
              this.props.push(this.state.searchYear)
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

export default StandingSearch
