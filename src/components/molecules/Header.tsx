import * as React from 'react'
import { Menu, Container } from 'semantic-ui-react'

const PageHeader = () => (
  <Menu fixed="top" inverted={true}>
    <Container>
      <Menu.Item as="a" header={true}>
        Mini-At-Bat
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>
    </Container>
  </Menu>
)

export default PageHeader
