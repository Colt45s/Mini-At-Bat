import * as React from 'react'
import { Dimmer } from 'semantic-ui-react'

const Overlay = ({ children }: any) => (
  <Dimmer active={true} inverted={true} page={true}>
    {children}
  </Dimmer>
)

export default Overlay
