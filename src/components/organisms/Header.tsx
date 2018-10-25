import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

const PageHeader = () => (
  <Menu borderless={true} fixed="top" size="large" inverted={true}>
    <Container>
      <Menu.Item header={true}>Mini-At-Bat</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/standings">
          Standings
        </Menu.Item>
        <Menu.Item as={Link} to="/schedule">
          Schedules
        </Menu.Item>
        <Menu.Item as={Link} to="/stats">
          Stats
        </Menu.Item>
        <Menu.Item as={Link} to="/draft">
          Draft
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default PageHeader
