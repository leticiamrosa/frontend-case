import React, { ReactNode } from 'react'
import { TransactionItemContainer } from '../transaction-item/transaction-item/transaction-item.container'
import { ITransaction } from '@domain/models/transactions/'

interface ITransactionItemList {
  transactionsItem: ITransaction[]
}

export const TransactionItemList: React.FC<ITransactionItemList> = ({
  transactionsItem
}: ITransactionItemList) => {
  const renderTransactionItems = (): ReactNode[] => {
    const element = transactionsItem.map((item, index) => {
      const isFirstItem = index === 0
      return <TransactionItemContainer key={index} transaction={item} isFirstItem={isFirstItem}/>
    })

    return element
  }

  return <>{transactionsItem && renderTransactionItems()}</>
}
