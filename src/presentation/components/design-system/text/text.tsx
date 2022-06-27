import React from 'react'
import Styled, { TextProps } from './text.styles'

interface IText extends TextProps {
  children: string
  style?: React.CSSProperties
  fontWeight?: number
}

export const Text: React.FC<IText> = ({
  fontWeight,
  fontColor,
  fontLineHeight,
  variant,
  color,
  children,
  style,
  ...props
}: IText) => {
  return (
    <Styled.Text
      weight={fontWeight}
      fontColor={fontColor}
      fontLineHeight={fontLineHeight}
      variant={variant}
      color={color}
      style={style}
      {...props}

    >
      {children}
    </Styled.Text>
  )
}
