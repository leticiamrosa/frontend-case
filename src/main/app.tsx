import React, { ReactElement } from 'react'
import { Router } from '@main/routes/router'
import GlobalStyles from '@presentation/styles/global'

export const App = (): ReactElement => {
  return (
    <>
    <Router />
    <GlobalStyles />
    </>
  )
}
