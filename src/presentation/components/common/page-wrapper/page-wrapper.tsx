import React, { ReactElement } from 'react'
import Styled from './page-wrapper.styles'
import { isMobile } from '@presentation/styles/dimensions'

interface IPageWrapperProps {
  children: ReactElement
}

export const PageWrapper: React.FC = ({ children }: IPageWrapperProps) => {
  return (
    <Styled.Wrapper isMobile={isMobile()}>{children}</Styled.Wrapper>
  )
}
