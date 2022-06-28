import React, { ReactElement } from 'react'
import { Routes } from '@main/routes/router'
import GlobalStyles from '@presentation/styles/global'

import { TransactionsContext } from '@presentation/providers/transactions-provider/transactions-provider'

export const App = (): ReactElement => {
  return (
    <TransactionsContext.Provider>
      <Routes />
      <GlobalStyles />
    </TransactionsContext.Provider>
  )
}
