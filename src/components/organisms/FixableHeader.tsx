import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Container, Dropdown, Menu, Visibility } from 'semantic-ui-react'
import { RootState } from '../../reducers'
import { SearchState } from '../../reducers/search'

type Props = {
  search: SearchState
  push: (year: string) => void
  location: any
}

type OwnProps = {
  selectedYear: string
  menuFixed: boolean
}

const currentYear = new Date().getFullYear()
const YEARS_LIMIT = 10
const createYearsOption = () => {
  return Array.from(new Array(YEARS_LIMIT), (v, i) => ({
    key: i,
    value: currentYear - i,
    text: currentYear - i
  }))
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

class FixableHeader extends React.Component<Props, OwnProps> {
  state = {
    selectedYear: this.props.search.selectedYear,
    menuFixed: false
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.search.selectedYear !== this.props.search.selectedYear) {
      this.setState({ selectedYear: this.props.search.selectedYear })
    }
  }

  stickTopMenu() {
    this.setState({ menuFixed: true })
  }

  unStickTopMenu() {
    this.setState({ menuFixed: false })
  }

  changeYear(e: any, { value }: any) {
    const yearString = value.toString()
    this.setState({ selectedYear: yearString }, () => {
      this.props.push(this.state.selectedYear)
    })
  }

  render() {
    const { menuFixed, selectedYear } = this.state
    const { location } = this.props
    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          stackable={true}
          borderless={true}
          fixed={menuFixed ? 'top' : undefined}
          style={{ borderRadius: 0 }}
        >
          <Container>
            <Menu.Item
              as={Link}
              to={{
                pathname: '/standings',
                search: location.search
              }}
            >
              Standings
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={{ pathname: '/schedule', search: location.search }}
            >
              Schedules
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={{ pathname: '/stats', search: location.search }}
            >
              Stats
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={{ pathname: '/draft', search: location.search }}
            >
              Draft
            </Menu.Item>
            <Menu.Menu position="right">
              <Dropdown
                item={true}
                text={selectedYear}
                defaultValue={selectedYear}
                onChange={this.changeYear}
                options={createYearsOption()}
              />
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    )
  }
}

export default withRouter(connector(FixableHeader))
