import * as React from 'react'
import { Menu } from 'semantic-ui-react'

const PageHeader = () => (
  <Menu
    borderless={true}
    inverted={true}
    style={{ borderRadius: 0, marginBottom: 0 }}
  >
    <Menu.Item header={true}>Mini-At-Bat</Menu.Item>
  </Menu>
)

export default PageHeader
