import React from 'react'
import Styled from './header.styles'
import { isMobile } from '@presentation/styles/dimensions'

export const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper isMobile={isMobile()}>
      <Styled.Title>Extrato</Styled.Title>
    </Styled.HeaderWrapper>
  )
}
