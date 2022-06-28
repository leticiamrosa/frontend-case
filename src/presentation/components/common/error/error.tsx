import React from 'react'
import { FontSizeType } from '@presentation/styles/theme'

import Styled from './error.style'

export const Error: React.FC = () => {
  return (
    <Styled.ErrorWrapper>
      <Styled.Text variant={FontSizeType.MEDIUM}>Ops! Algo deu errado, tente novamente!</Styled.Text>
    </Styled.ErrorWrapper>
  )
}
