import * as React from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  padding-top: 5em;
  padding-bottom: 5em;
`

const MainContainer = ({ children }: any) => {
  return (
    <Container>
      <MainWrapper>{children}</MainWrapper>
    </Container>
  )
}

export default MainContainer
