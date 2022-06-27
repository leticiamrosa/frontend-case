import React, { ReactNode } from 'react'
import { ITransactionsDay } from '@domain/models/transactions/'
import { TransactionList } from './transaction-list'
import { TransactionContainer } from '../transaction/transaction.container'
import { formattedDayDate } from '@presentation/helpers/date-helper/date-helper'

interface ITransactionList {
  transactionsDay: ITransactionsDay[]
}

export const TransactionListContainer: React.FC<ITransactionList> = ({
  transactionsDay
}: ITransactionList) => {
  const renderTransactionsList = (): ReactNode[] => {
    const element = transactionsDay.map((item, index) => {
      const transactionDateDay = formattedDayDate(item?.date)
      const hasHeader = index === 0

      return (
        <TransactionList key={index} transactionDateDay={transactionDateDay} hasHeader={hasHeader}>
          <TransactionContainer transactionsItem={item.items} />
        </TransactionList>
      )
    })

    return element
  }

  return <>{renderTransactionsList()}</>
}
