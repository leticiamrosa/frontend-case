import React from 'react'
import { isMobile } from '@presentation/styles/dimensions'

import Styled from './header.styles'

export const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper isMobile={isMobile()}>
      <Styled.Title>Extrato</Styled.Title>
    </Styled.HeaderWrapper>
  )
}
