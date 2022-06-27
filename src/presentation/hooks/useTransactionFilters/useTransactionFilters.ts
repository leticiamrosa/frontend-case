/* eslint-disable array-callback-return */
import { TransactionFilterTypes, transactionFilterType } from '@presentation/pages/statement/components/transaction-filter/transaction-filter-types'
import { useState, useCallback } from 'react'
import { ITransactionsDay } from '@domain/models/transactions/'

interface ITransactionFiltersHooks {
  selectedFilter: string
  getTransactionFilter: (filter: string) => void
  defaultFilters: string[]
  handleSetTransactionFilter: (transactions: ITransactionsDay[]) => void
  transactionsFilter: ITransactionsDay[]
}

interface ITransactionFilterHooksProps {
  initialFilter?: string
}

const DEFAULT_FILTERS = [
  TransactionFilterTypes.ALL,
  TransactionFilterTypes.ENTRY,
  TransactionFilterTypes.WITHDRAW,
  TransactionFilterTypes.SCHEDULED
]

export const useTransactionFilters = ({
  initialFilter
}: ITransactionFilterHooksProps): ITransactionFiltersHooks => {
  const [selectedFilter, setSelectedFilter] = useState<string>(initialFilter || TransactionFilterTypes.ALL)
  const [transactionsFilter, setTransactionsFilter] = useState<ITransactionsDay[]>()

  const handleSetTransactionFilter = (transactions: ITransactionsDay[]): void => {
    if (!transactions || transactions.length === 0) return

    const newTransactions = []

    transactions.map(({ items, ...props }) => {
      return items.filter(item => {
        const transactionItemType = transactionFilterType[item.entry](item.scheduled)
        if (transactionItemType === selectedFilter) {
          newTransactions.push({
            ...props,
            items: [
              item
            ]
          })
        }
      })
    })

    setTransactionsFilter(newTransactions)
  }

  const getTransactionFilter = useCallback((filter: string) => {
    setSelectedFilter(filter)
  }, [])

  return {
    selectedFilter,
    getTransactionFilter,
    defaultFilters: DEFAULT_FILTERS,
    handleSetTransactionFilter,
    transactionsFilter
  }
}
