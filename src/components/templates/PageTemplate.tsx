import * as React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  position: relative;
  padding: 10px;
`
PageWrapper.displayName = 'PageWrapper'

const PageTemplate = ({ children }: any) => {
  return <PageWrapper>{children}</PageWrapper>
}

export default PageTemplate
