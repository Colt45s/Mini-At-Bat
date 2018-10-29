import * as React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

const PageHeader = (props: any) => (
  <Menu borderless={true} fixed="top" size="large" inverted={true}>
    <Container>
      <Menu.Item header={true}>Mini-At-Bat</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          as={Link}
          to={{ pathname: '/standings', search: props.location.search }}
        >
          Standings
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={{ pathname: '/schedule', search: props.location.search }}
        >
          Schedules
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={{ pathname: '/stats', search: props.location.search }}
        >
          Stats
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={{ pathname: '/draft', search: props.location.search }}
        >
          Draft
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default withRouter(PageHeader)
