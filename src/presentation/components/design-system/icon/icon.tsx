import React from 'react'
import Styled from './icon.styles'

interface IIcon {
  icon: string
  backgroundWidth?: number
  backgroundHeight?: number
  backgroundColor?: string
  iconWidth?: number
  iconHeight?: number
  iconColor?: string
  iconColorFill?: string
  iconColorStroke?: string
  style?: React.CSSProperties
}

export const Icon: React.FC<IIcon> = ({
  icon,
  backgroundWidth,
  backgroundHeight,
  backgroundColor,
  iconWidth,
  iconHeight,
  iconColor,
  iconColorFill,
  iconColorStroke,
  style,
  ...props
}: IIcon) => {
  return (
    <Styled.WrapperIcon
      width={backgroundWidth}
      height={backgroundHeight}
      color={backgroundColor}
      style={style}
      {...props}
    >
      <Styled.Icon
        src={icon}
        width={iconWidth}
        height={iconHeight}
        color={iconColor}
        iconColorFill={iconColorFill}
        iconColorStroke={iconColorStroke}
      />
    </Styled.WrapperIcon>
  )
}
