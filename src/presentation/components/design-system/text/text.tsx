import React from 'react'
import Styled, { TextProps } from './text.styles'

interface IText extends TextProps {
  children: string
}

export const Text: React.FC<IText> = ({
  fontWeight,
  fontColor,
  fontLineHeight,
  variant,
  color,
  children
}: IText) => {
  return (
    <Styled.Text
      fontWeight={fontWeight}
      fontColor={fontColor}
      fontLineHeight={fontLineHeight}
      variant={variant}
      color={color}
    >
      {children}
    </Styled.Text>
  )
}
