import { useState, useCallback } from 'react'
import {
  TransactionFilterTypes,
  transactionFilterType
} from '@presentation/pages/statement/components/transaction-filter/transaction-filter-types'
import { ITransactionsDay } from '@domain/models/transactions/'

interface ITransactionFiltersHooks {
  selectedFilter: string
  getTransactionFilter: (filter: string) => void
  defaultFilters: string[]
  transactionsFilter: ITransactionsDay[]
  handleTransactionsFilter: () => void
}

interface ITransactionFilterHooksProps {
  initialFilter?: string
  transactions: ITransactionsDay[]
}

const DEFAULT_FILTERS = [
  TransactionFilterTypes.ALL,
  TransactionFilterTypes.ENTRY,
  TransactionFilterTypes.WITHDRAW,
  TransactionFilterTypes.SCHEDULED
]

export const useTransactionFilters = ({
  initialFilter,
  transactions
}: ITransactionFilterHooksProps): ITransactionFiltersHooks => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    initialFilter || TransactionFilterTypes.ALL
  )
  const [transactionsFilter, setTransactionsFilter] =
    useState<ITransactionsDay[]>()

  const handleTransactionsFilter = (): void => {
    if (!transactions || transactions.length === 0) return

    if (selectedFilter === TransactionFilterTypes.ALL) {
      setTransactionsFilter(transactions)
      return
    }

    if (selectedFilter === TransactionFilterTypes.SCHEDULED) {
      const scheduledFilter = transactions.filter(({ items }) =>
        items.some((item) => item.scheduled)
      )
      setTransactionsFilter(scheduledFilter)
      return
    }

    const transactionsItemFilters = []
    transactions.forEach(({ items, ...props }) => {
      return items.some(
        (item) =>
          transactionFilterType[item.entry] === selectedFilter &&
          transactionsItemFilters.push({
            ...props,
            items: [item]
          })
      )
    })

    setTransactionsFilter(transactionsItemFilters)
  }

  const getTransactionFilter = useCallback((filter: string) => {
    setSelectedFilter(filter)
  }, [selectedFilter])

  return {
    defaultFilters: DEFAULT_FILTERS,
    selectedFilter,
    getTransactionFilter,
    transactionsFilter,
    handleTransactionsFilter
  }
}
