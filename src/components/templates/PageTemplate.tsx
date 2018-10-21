import * as React from 'react'
import MainContainer from '../atoms/MainContainer'
import Header from '../organisms/Header'

const PageTemplate = ({ children }: any) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  )
}

export default PageTemplate
