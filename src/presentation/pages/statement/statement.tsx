import React, { useEffect } from 'react'
import { SearchBar } from '@presentation/components/common'
import { TransactionsContext } from '@presentation/providers/transactions-provider/transactions-provider'
import { TransactionListContainer } from './components/transactions-list/transaction-list.container'

import Styled from './statement.style'

export const Statement: React.FC = () => {
  const { transactions, handleGetTransactions } = TransactionsContext.useContainer()

  useEffect(() => {
    handleGetTransactions()
  },[])

  const result = transactions?.results[0]?.items[0]

  return (
    <Styled.Wrapper>
      <SearchBar />

      {result && <TransactionListContainer transactionsDay={transactions?.results}/>}
    </Styled.Wrapper>
  )
}
