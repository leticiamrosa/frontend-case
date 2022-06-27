import React from 'react'
import ErrorImage from '@presentation/assets/images/graphic/404_page_not_found__monochromatic.svg'
import { FontSizeType } from '@presentation/styles/theme'
import Styled from './default-error.styles'

export const DefaultErrorPage: React.FC = () => {
  return (
    <Styled.ErrorWrapper>
      <Styled.Image src={ErrorImage} alt="Error imagem"/>
      <Styled.Text variant={FontSizeType.MEDIUM}>Ops! Página não encontrada...</Styled.Text>
    </Styled.ErrorWrapper>
  )
}
