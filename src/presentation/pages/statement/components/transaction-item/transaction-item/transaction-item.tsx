import React from 'react'
import { IFormattedPrefixAmount } from './transaction-types'
import Styled from './transaction-item.style'

interface ITransactionProps {
  username: string
  label: string
  icon: string
  date?: string
  total?: IFormattedPrefixAmount
  isRefunded: boolean
  isFirstItem: boolean
}

export const TransactionItem: React.FC<ITransactionProps> = ({
  username,
  label,
  icon,
  date,
  total,
  isRefunded,
  isFirstItem
}: ITransactionProps) => {
  return (
    <Styled.Content isFirstItem={isFirstItem}>
      <Styled.WrapperIconAndUserName>
        <Styled.TransactionIcon icon={icon} />
        <Styled.Text>{username}</Styled.Text>
      </Styled.WrapperIconAndUserName>

      <Styled.WrappperTransactionLabel>
        <Styled.TransactionLabel>{label}</Styled.TransactionLabel>
      </Styled.WrappperTransactionLabel>

      <Styled.WrapperDate>
        <Styled.Text>{date}</Styled.Text>
      </Styled.WrapperDate>

      <Styled.WrapperTotal>
        <Styled.Text space fontColor={total?.color}>{total?.prefix}</Styled.Text>
        <Styled.Text bold={!isRefunded} fontColor={total?.color} isRefunded={isRefunded}>{total?.amount}</Styled.Text>
      </Styled.WrapperTotal>
    </Styled.Content>
  )
}
