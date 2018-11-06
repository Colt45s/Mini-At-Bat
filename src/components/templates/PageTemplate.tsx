import * as React from 'react'
import MainContainer from '../atoms/MainContainer'
import FixHeader from '../organisms/FixableHeader'
import Header from '../organisms/Header'

const PageTemplate = ({ children }: any) => {
  return (
    <>
      <Header />
      <FixHeader />
      <MainContainer>{children}</MainContainer>
    </>
  )
}

export default PageTemplate
