import * as React from 'react'
import MainContainer from '../atoms/MainContainer'
import FixableHeader from '../organisms/FixableHeader'
import Header from '../organisms/Header'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <FixableHeader />
      <MainContainer>{children}</MainContainer>
    </>
  )
}

export default Layout
