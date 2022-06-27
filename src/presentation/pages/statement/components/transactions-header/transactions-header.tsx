import React from 'react'
import { colors, FontSizeType, fontWeight } from '@presentation/styles/theme'
import Styled from './transactions-header.styles'

interface ITransactionHeader {
  transactionDateDay: string
}

export const TransactionsHeader: React.FC<ITransactionHeader> = ({
  transactionDateDay
}: ITransactionHeader) => {
  return (
    <Styled.Content>
      <Styled.WrapperDataTransactions>
        <Styled.Text fontWeight={fontWeight.BOLD}>
          {transactionDateDay}
        </Styled.Text>
      </Styled.WrapperDataTransactions>

      <Styled.WrapperTransactionType>
        <Styled.Text variant={FontSizeType.SMALL}>
          Tipo de transação
        </Styled.Text>
      </Styled.WrapperTransactionType>

      <Styled.WrapperData>
        <Styled.Text
          fontColor={colors.PRIMARY_HIGHLIGHT}
          fontWeight={fontWeight.BOLD}
        >
          Data
        </Styled.Text>
      </Styled.WrapperData>

      <Styled.WrapperTotal>
        <Styled.Text>Valor</Styled.Text>
      </Styled.WrapperTotal>
    </Styled.Content>
  )
}
