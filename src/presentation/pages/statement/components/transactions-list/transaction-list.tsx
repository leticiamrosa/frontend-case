import React, { ReactNode } from 'react'
import { TransactionsHeader } from '../transactions-header/transactions-header'
import Styled from './transaction-list.styles'

interface ITransactionList {
  children: ReactNode
  transactionDateDay: string
}

export const TransactionList: React.FC<ITransactionList> = ({
  children,
  transactionDateDay
}: ITransactionList) => {
  return (
    <>
      <TransactionsHeader transactionDateDay={transactionDateDay}/>
      <Styled.Line />
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </>
  )
}
