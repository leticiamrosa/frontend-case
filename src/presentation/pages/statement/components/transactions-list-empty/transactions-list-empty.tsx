import React from 'react'
import Styled from './transactions-list-empty.style'

export const TransactionListEmpty: React.FC = () => {
  return (
    <>
      <Styled.Line />
      <Styled.Wrapper>
        <Styled.Text>Ops, nenhuma transação encontrada!</Styled.Text>
      </Styled.Wrapper>
    </>
  )
}
