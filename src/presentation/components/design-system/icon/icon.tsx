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
  iconColorStroke
}: IIcon) => {
  return (
    <Styled.WrapperIcon
      width={backgroundWidth}
      height={backgroundHeight}
      color={backgroundColor}
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
