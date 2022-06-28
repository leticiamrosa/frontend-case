import React from 'react'
import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import { useTransactionFilters } from '@presentation/hooks/useTransactionFilters/useTransactionFilters'
import { TransactionsContext } from '@presentation/providers/transactions-provider/transactions-provider'
import {
  mockTransactionDay,
  mockTransactionScheduledDay,
  mockTransactionsEntryDay,
  mockTransactionsOutDay
} from '@tests/domain/mocks/'
import { TransactionFilterTypes } from '@presentation/pages/statement/components/transaction-filter/transaction-filter-types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const renderWrapper = (mocks?: any) => {
  const wrapper: React.FC = ({ children }) => {
    return (
      <TransactionsContext.Provider>{children}</TransactionsContext.Provider>
    )
  }

  return renderHook(() => useTransactionFilters(mocks), {
    wrapper
  })
}

describe('TransactionFiltersHooks', () => {
  afterEach(cleanup)

  test('should transaction filters hooks render correctly', () => {
    const mockProps = {
      transactions: mockTransactionDay
    }
    const { result } = renderWrapper(mockProps)

    expect(result.current.selectedFilter).toEqual(TransactionFilterTypes.ALL)
  })

  describe('getTransactionFilter', () => {
    test('should set the transaction filter equal ENTRY when receive a transaction filter ENTRY', async () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.getTransactionFilter(TransactionFilterTypes.ENTRY)
      })

      // then
      expect(result.current.selectedFilter).toEqual(TransactionFilterTypes.ENTRY)
    })

    test('should set the transaction filter equal ALL when receive a transaction filter ALL', async () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.getTransactionFilter(TransactionFilterTypes.ALL)
      })

      // then
      expect(result.current.selectedFilter).toEqual(TransactionFilterTypes.ALL)
    })

    test('should set the transaction filter equal SCHEDULED when receive a transaction filter SCHEDULED', async () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.getTransactionFilter(TransactionFilterTypes.SCHEDULED)
      })

      // then
      expect(result.current.selectedFilter).toEqual(TransactionFilterTypes.SCHEDULED)
    })

    test('should set the transaction filter equal OUT when receive a transaction filter OUT', async () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.getTransactionFilter(TransactionFilterTypes.OUT)
      })

      // then
      expect(result.current.selectedFilter).toEqual(TransactionFilterTypes.OUT)
    })
  })

  describe('handleTransactionsFilter', () => {
    test('should not return when havent transactions', () => {
      // given
      const mockTransactions = {
        transactions: []
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.handleTransactionsFilter()
      })

      // then
      expect(result.current.transactionsFilter).toBeUndefined()
    })

    test('should return ALL transactions when the filter is equal ALL', () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.handleTransactionsFilter()
      })

      // then
      expect(result.current.transactionsFilter).toEqual(mockTransactionDay)
    })

    test('should return SCHEDULED transactions when the filter is equal SCHEDULED', () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.getTransactionFilter(TransactionFilterTypes.SCHEDULED)
      })

      act(() => {
        result.current.handleTransactionsFilter()
      })

      // then
      expect(result.current.transactionsFilter).toEqual(mockTransactionScheduledDay)
    })

    test('should return ENTRY transactions when the filter is equal ENTRY', () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.getTransactionFilter(TransactionFilterTypes.ENTRY)
      })

      act(() => {
        result.current.handleTransactionsFilter()
      })

      // then
      expect(result.current.transactionsFilter).toEqual(mockTransactionsEntryDay)
    })

    test('should return OUT transactions when the filter is equal OUT', () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.getTransactionFilter(TransactionFilterTypes.OUT)
      })

      act(() => {
        result.current.handleTransactionsFilter()
      })

      // then
      expect(result.current.transactionsFilter).toEqual(mockTransactionsOutDay)
    })
  })
})
