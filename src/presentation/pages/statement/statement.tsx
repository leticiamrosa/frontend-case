import React, { useEffect, ChangeEvent, useCallback } from 'react'
import { SearchBar, Error } from '@presentation/components/common'
import { Loading } from '@presentation/components/design-system'
import { TransactionsContext } from '@presentation/providers/transactions-provider/transactions-provider'
import { TransactionListContainer } from './components/transactions-list/transaction-list.container'
import { TransactionFilterContainer } from './components/transaction-filter/transaction-filter.container'
import { useTransactionFilters } from '@presentation/hooks/useTransactionFilters/useTransactionFilters'
import { TransactionFilterTypes } from './components/transaction-filter/transaction-filter-types'
import { useTransactionSearch } from '@presentation/hooks/useTransactionsSearch/useTransactionSearch'

import Styled from './statement.style'

export const Statement: React.FC = () => {
  const { transactions, handleGetTransactions, loading, error } =
    TransactionsContext.useContainer()

  const transactionsResults = transactions?.results

  const {
    handleSearchTerm,
    searchValues,
    handleSearchFilter,
    searchTerm,
    searchRef
  } = useTransactionSearch({
    transactions: transactionsResults
  })
  const {
    getTransactionFilter,
    selectedFilter,
    defaultFilters,
    transactionsFilter,
    handleTransactionsFilter
  } = useTransactionFilters({
    initialFilter: TransactionFilterTypes.ALL,
    transactions: transactionsResults
  })

  useEffect(() => {
    handleGetTransactions()
  }, [])

  useEffect(() => {
    handleFilter()
    if (searchRef?.current) {
      searchRef.current.value = ''
    }
  }, [selectedFilter])

  const handleFilter = (): void => {
    handleTransactionsFilter()
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    handleSearchTerm(value)
    handleSearchFilter()
    getTransactionFilter('')
  }

  const getTransactionsDays = useCallback(() => {
    const isInitialFilter = selectedFilter === TransactionFilterTypes.ALL
    const isSearch = searchValues && searchValues.length > 0 && transactionsFilter && transactionsFilter.length === 0

    if (isInitialFilter) {
      return transactionsResults
    }

    if (isSearch) {
      return searchValues
    }

    if (transactionsFilter) {
      return transactionsFilter
    }

    return transactionsResults
  },[transactionsResults, transactionsFilter, searchValues, selectedFilter, searchTerm])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const transactionsDay = getTransactionsDays()
  const hasSearch = transactionsFilter && transactionsFilter.length === 0

  return (
    <Styled.Wrapper>
      <SearchBar onChangeSearch={handleSearch} inputRef={searchRef}>
        <TransactionFilterContainer
          onClickFilter={getTransactionFilter}
          selectedFilter={selectedFilter}
          filters={defaultFilters}
          hasSearch={hasSearch}
        />
      </SearchBar>

      {transactionsDay && (
        <TransactionListContainer transactionsDay={transactionsDay} />
      )}
    </Styled.Wrapper>
  )
}
