import React from 'react'
import { fontWeight, FontSizeType } from '@presentation/styles/theme'
import Styled from './transactions-footer.styles'

interface ITransactionFooter {
  transactionDateDay: string
  amountTotalDay: string
}

export const TransactionsFooter: React.FC<ITransactionFooter> = ({
  transactionDateDay,
  amountTotalDay
}: ITransactionFooter) => {
  const amountTotalDayLabel = `R$ ${amountTotalDay}`

  return (
    <Styled.Content>
      <Styled.WrapperDataTransactions>
        <Styled.Text fontWeight={fontWeight.BOLD}>
          {transactionDateDay}
        </Styled.Text>
      </Styled.WrapperDataTransactions>

      <Styled.WrapperTotal>
        <Styled.Text space variant={FontSizeType.EXTRA_SMALL}>
          saldo do dia
        </Styled.Text>
        <Styled.Text
          fontWeight={fontWeight.BOLD}
          variant={FontSizeType.EXTRA_SMALL}
        >
          {amountTotalDayLabel}
        </Styled.Text>
      </Styled.WrapperTotal>
    </Styled.Content>
  )
}
