import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Container, Dropdown, Menu, Visibility } from 'semantic-ui-react'
import { RootState } from '../../reducers'
import getSelectedYear from '../../utils/getSelectedYear'

type Props = {
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
    return {}
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
    selectedYear: '',
    menuFixed: false
  }

  componentDidMount() {
    const year = getSelectedYear(this.props.location.search)

    this.setState({ ...this.state, selectedYear: year })
  }

  render() {
    const { menuFixed, selectedYear } = this.state
    const { location } = this.props
    return (
      <Visibility
        onBottomPassed={() => {
          this.setState({ menuFixed: true })
        }}
        onBottomVisible={() => {
          this.setState({ menuFixed: false })
        }}
        once={false}
      >
        <Menu
          stackable={true}
          borderless={true}
          fixed={menuFixed ? 'top' : undefined}
          style={{ background: '#fff' }}
          pointing={true}
          secondary={true}
        >
          <Container>
            <Menu.Item
              as={Link}
              to={{
                pathname: '/standings',
                search: location.search
              }}
              active={location.pathname === '/standings'}
            >
              Standings
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={{ pathname: '/schedule', search: location.search }}
              active={location.pathname === '/schedule'}
            >
              Schedules
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={{ pathname: '/stats', search: location.search }}
              active={location.pathname === '/stats'}
            >
              Stats
            </Menu.Item>
            <Menu.Item
              as={Link}
              to={{ pathname: '/draft', search: location.search }}
              active={location.pathname === '/draft'}
            >
              Draft
            </Menu.Item>
            <Menu.Menu position="right">
              <Dropdown
                item={true}
                text={selectedYear}
                defaultValue={selectedYear}
                onChange={(e: any, { value }: any) => {
                  const yearString = value.toString()
                  this.setState({ selectedYear: yearString }, () => {
                    this.props.push(this.state.selectedYear)
                  })
                }}
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
