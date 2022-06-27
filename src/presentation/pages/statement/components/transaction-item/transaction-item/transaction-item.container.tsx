import React from 'react'
import { transactionLabel, transactionIconType, formattedPrefixAmount } from './transaction-types'
import { ITransaction, ITransactionStatus } from '@domain/models/transactions'
import { formattedDateDisplay } from '@presentation/helpers/date-helper/date-helper'
import { TransactionItem } from './transaction-item'

interface ITransactionContainer {
  transaction: ITransaction
  isFirstItem: boolean
}

export const TransactionItemContainer: React.FC<ITransactionContainer> = ({
  transaction,
  isFirstItem
}: ITransactionContainer) => {
  const paymentStatus = transaction?.status
  const isRefunded = paymentStatus === ITransactionStatus.REFUNDED

  const username = transaction?.actor
  const label = transactionLabel[paymentStatus](transaction)
  const icon = transactionIconType[paymentStatus]
  const date = formattedDateDisplay(transaction?.dateEvent)
  const total = formattedPrefixAmount(transaction)

  return (
      <TransactionItem
        username={username}
        label={label}
        icon={icon}
        date={date}
        total={total}
        isRefunded={isRefunded}
        isFirstItem={isFirstItem}
      />
  )
}
