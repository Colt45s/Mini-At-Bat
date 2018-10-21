import * as React from 'react'
import { Container, Menu } from 'semantic-ui-react'

const PageHeader = () => (
  <Menu fixed="top" size="large" inverted={true}>
    <Container fluid={true}>
      <Menu.Item as="a" header={true}>
        Mini-At-Bat
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>
    </Container>
  </Menu>
)

export default PageHeader
