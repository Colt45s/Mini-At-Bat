import * as React from 'react'
import Header from '../organisms/Header'
import MainContainer from '../atoms/MainContainer'

const PageTemplate = ({ children }: any) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  )
}

export default PageTemplate
