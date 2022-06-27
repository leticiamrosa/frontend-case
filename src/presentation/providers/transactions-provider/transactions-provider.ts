import { useMemo, useRef, useState } from 'react'
import { createContainer } from 'unstated-next'
import { Transaction } from '@domain/usecases/transactions'
import { makeRemoteTransactions } from '@main/usecases/transactions/remote-transactions-factory'

interface ITransactionsContext {
  handleGetTransactions: () => Promise<void>
  transactions: Transaction.Model
  loading: boolean
  error: Error
}

const useTransactionsContext = (): ITransactionsContext => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  const [transactions, setTransactions] = useState<Transaction.Model>(null)

  const service = useMemo(() => makeRemoteTransactions(), [])
  const transactionsService = useRef<Transaction>(service)

  const handleGetTransactions = async (): Promise<void> => {
    if (!transactionsService.current) return

    try {
      setLoading(true)

      const result = await transactionsService.current.getTransactions()

      setTransactions(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    handleGetTransactions,
    transactions,
    loading,
    error
  }
}

export const TransactionsContext = createContainer(useTransactionsContext)
