import React from 'react'
import { SearchBar } from '@presentation/components/common'
import Styled from './statement.style'

export const Statement: React.FC = () => {
  return (
    <Styled.Wrapper>
      <SearchBar />
    </Styled.Wrapper>
  )
}
