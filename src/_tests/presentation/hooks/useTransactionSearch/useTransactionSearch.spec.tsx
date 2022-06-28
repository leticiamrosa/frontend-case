import React from 'react'
import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import { TransactionsContext } from '@presentation/providers/transactions-provider/transactions-provider'
import {
  mockTransactionDay,
  mockTransactionsSearchResults
} from '@tests/domain/mocks/'
import { useTransactionSearch } from '@presentation/hooks/useTransactionsSearch/useTransactionSearch'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const renderWrapper = (mocks?: any) => {
  const wrapper: React.FC = ({ children }) => {
    return (
        <TransactionsContext.Provider>{children}</TransactionsContext.Provider>
    )
  }

  return renderHook(() => useTransactionSearch(mocks), {
    wrapper
  })
}

describe('Transactions Search Hooks', () => {
  afterEach(cleanup)

  describe('handleSearchFilter', () => {
    test('should return nothing when there isnt a transactions ', () => {
      // given
      const mockTransactions = {
        transactions: []
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.handleSearchFilter()
      })

      // then
      expect(result.current.searchValues).toBeUndefined()
    })

    test('should return a items search values when the string match', () => {
      // given
      const mockTransactions = {
        transactions: mockTransactionDay
      }
      const { result } = renderWrapper(mockTransactions)

      // when
      act(() => {
        result.current.handleSearchTerm('camis')
      })

      act(() => {
        result.current.handleSearchFilter()
      })

      // then
      expect(result.current.searchValues).toEqual(mockTransactionsSearchResults)
    })
  })
})
