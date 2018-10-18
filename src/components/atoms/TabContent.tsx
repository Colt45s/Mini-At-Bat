import * as React from 'react'
import { Tab } from 'semantic-ui-react'

export default (props: any) => (
  <Tab.Pane attached={false}>{props.children}</Tab.Pane>
)
