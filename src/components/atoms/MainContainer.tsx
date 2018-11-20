import React from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  padding: 1.5rem 0;
`

MainWrapper.displayName = 'MainWrapper'

const MainContainer = ({ children }: any) => {
  return (
    <Container>
      <MainWrapper>{children}</MainWrapper>
    </Container>
  )
}

export default MainContainer
