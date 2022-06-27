import React, { ReactNode } from 'react'
import { TransactionsHeader } from '../transactions-header/transactions-header'
import { TransactionsFooter } from '../transactions-footer/transactions-footer'

import Styled from './transaction-list.styles'

interface ITransactionList {
  children: ReactNode
  transactionDateDay: string
  hasHeader: boolean
  amountTotalDay: string
}

export const TransactionList: React.FC<ITransactionList> = ({
  children,
  transactionDateDay,
  hasHeader,
  amountTotalDay
}: ITransactionList) => {
  const renderHeaderOrFooter = hasHeader
    ? (
    <TransactionsHeader transactionDateDay={transactionDateDay} />
      )
    : <TransactionsFooter transactionDateDay={transactionDateDay} amountTotalDay={amountTotalDay}/>

  return (
    <>
      {renderHeaderOrFooter}
      <Styled.Line />
      <Styled.Wrapper>{children}</Styled.Wrapper>
      <Styled.Line />
    </>
  )
}
