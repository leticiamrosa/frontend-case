import { colors } from '@presentation/styles/theme'
import styled, { css } from 'styled-components'

interface WrapperIconProps {
  width?: number
  height?: number
  color?: string
}

interface IconProps {
  width?: number
  height?: number
  iconColorFill?: string
  iconColorStroke?: string
}

const WrapperIcon = styled.div<WrapperIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || 32}px;
  height: ${({ height }) => height || 32}px;
  background-color: ${({ color }) => color || colors.SECONDARY_BLUE_LIGHTEN};
  border-radius: 50%;
`

const Icon = styled.img<IconProps>`
  width: auto;
  height: ${({ height }) => height || 32}px;
  fill: ${({ iconColorFill }) => iconColorFill || colors.PRIMARY_GRAY};
  stroke: ${({ iconColorStroke }) => iconColorStroke || colors.PRIMARY_GRAY};
  padding: 4px;

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
      padding: 0px;
    `}
`

export default {
  WrapperIcon,
  Icon
}
