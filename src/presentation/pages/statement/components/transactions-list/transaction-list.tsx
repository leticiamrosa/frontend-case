import React, { ReactNode } from 'react'
import { TransactionsHeader } from '../transactions-header/transactions-header'
import { TransactionsFooter } from '../transactions-footer/transactions-footer'

import Styled from './transaction-list.styles'

interface ITransactionList {
  children: ReactNode
  transactionDateDay: string
  hasHeader: boolean
}

export const TransactionList: React.FC<ITransactionList> = ({
  children,
  transactionDateDay,
  hasHeader
}: ITransactionList) => {
  const renderHeaderOrFooter = hasHeader
    ? (
    <TransactionsHeader transactionDateDay={transactionDateDay} />
      )
    : <TransactionsFooter transactionDateDay={transactionDateDay}/>

  return (
    <>
      {renderHeaderOrFooter}
      <Styled.Line />
      <Styled.Wrapper>{children}</Styled.Wrapper>
      <Styled.Line />
    </>
  )
}
