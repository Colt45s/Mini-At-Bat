import * as React from 'react'
import styled from 'styled-components'
import Header from '../molecules/Header'
import MainContainer from '../atoms/MainContainer'

const PageWrapper = styled.div`
  position: relative;
`
PageWrapper.displayName = 'PageWrapper'

const PageTemplate = ({ children }: any) => {
  return (
    <PageWrapper>
      <Header />
      <MainContainer>{children}</MainContainer>
    </PageWrapper>
  )
}

export default PageTemplate
