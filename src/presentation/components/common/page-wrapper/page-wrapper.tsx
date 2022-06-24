import React, { ReactElement } from 'react'
import Styled from './page-wrapper.styles'

interface IPageWrapperProps {
  children: ReactElement
}

export const PageWrapper: React.FC = ({ children }: IPageWrapperProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>
}
