import React, { useEffect } from 'react'
import { SearchBar } from '@presentation/components/common'
import { TransactionsContext } from '@presentation/providers/transactions-provider/transactions-provider'
import { TransactionListContainer } from './components/transactions-list/transaction-list.container'
import { TransactionFilterContainer } from './components/transaction-filter/transaction-filter.container'
import { useTransactionFilters } from '@presentation/hooks/useTransactionFilters/useTransactionFilters'
import { TransactionFilterTypes } from './components/transaction-filter/transaction-filter-types'
import Styled from './statement.style'

export const Statement: React.FC = () => {
  const { transactions, handleGetTransactions } =
    TransactionsContext.useContainer()

  const { getTransactionFilter, selectedFilter, defaultFilters, handleSetTransactionFilter, transactionsFilter } = useTransactionFilters({
    initialFilter: TransactionFilterTypes.ALL
  })

  useEffect(() => {
    handleGetTransactions()
  }, [])

  useEffect(() => {

  }, [transactionsFilter])

  useEffect(() => {
    if (!selectedFilter) return
    getFilter()
  }, [selectedFilter])

  const isInitialFilter = selectedFilter === TransactionFilterTypes.ALL
  const transactionsDay = isInitialFilter ? transactions?.results : transactionsFilter

  const getFilter = (): void => {
    if (!transactions?.results) return
    handleSetTransactionFilter(transactions?.results)
  }

  return (
    <Styled.Wrapper>
      <SearchBar>
        <TransactionFilterContainer
          onClickFilter={getTransactionFilter}
          selectedFilter={selectedFilter}
          filters={defaultFilters}
        />
      </SearchBar>

      {transactionsDay && (
        <TransactionListContainer transactionsDay={transactionsDay} />
      )}
    </Styled.Wrapper>
  )
}
