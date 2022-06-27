import React from 'react'
import { TransactionItemList } from '../transaction-item-list/transaction-item-list'
import { ITransaction } from '@domain/models/transactions/'

interface ITransactionContainer {
  transactionsItem: ITransaction[]
}

export const TransactionContainer: React.FC<ITransactionContainer> = ({
  transactionsItem
}: ITransactionContainer) => {
  return <TransactionItemList transactionsItem={transactionsItem} />
}
