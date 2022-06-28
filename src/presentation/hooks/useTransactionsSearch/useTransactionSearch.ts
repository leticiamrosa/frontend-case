import { useState, useCallback, useRef } from 'react'
import { ITransactionsDay } from '@domain/models/transactions/'

interface ITransactionSearchHooks {
  handleSearchTerm: (term: string) => void
  handleSearchFilter: () => void
  searchValues: ITransactionsDay[]
  searchTerm: string
  searchRef: HTMLElement
}

interface ITransactionSearchHooksProps {
  transactions: ITransactionsDay[]
}

export const useTransactionSearch = ({
  transactions
}: ITransactionSearchHooksProps): ITransactionSearchHooks => {
  const searchRef = useRef<HTMLElement>()
  const [searchTerm, setSearchTerm] = useState<string>()
  const [searchValues, setSearchValues] = useState<ITransactionsDay[]>()

  const handleSearchTerm = useCallback((term: string) => {
    setSearchTerm(term)
  }, [searchValues])

  const handleSearchFilter = (): void => {
    const shouldSkipSearchFilter = !transactions || transactions.length === 0 || !searchTerm

    if (shouldSkipSearchFilter) return

    const newSearchValues = []
    const regex = new RegExp(searchTerm, 'ig')
    transactions.forEach(({ items, ...props }) => {
      return items.some((item) => {
        return (
          item.actor.match(regex) &&
          newSearchValues.push({
            ...props,
            items: [item]
          })
        )
      })
    })

    setSearchValues(newSearchValues)
  }

  return {
    handleSearchTerm,
    handleSearchFilter,
    searchValues,
    searchTerm,
    searchRef: searchRef.current
  }
}
