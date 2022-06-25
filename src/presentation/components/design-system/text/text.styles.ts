import { colors } from '@presentation/styles/theme'
import {
  fontLineHeightVariant,
  fontSizeVariant,
  FontSizeType
} from '@presentation/styles/theme/font-size'
import styled from 'styled-components'

type IFontVariant =
  | FontSizeType.EXTRA_SMALL
  | FontSizeType.SMALL
  | FontSizeType.REGULAR
  | FontSizeType.MEDIUM

export interface TextProps {
  fontWeight?: number
  fontColor?: string
  fontLineHeight?: number
  variant?: IFontVariant
  color?: string
}

const textVariantConfig = ({ variant }: TextProps): string => {
  const fontSize: string = fontSizeVariant[variant]
  const lineHeight: string = fontLineHeightVariant[variant]

  return `
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `
}

const Text = styled.p<TextProps>`
  color: ${({ color }) => color || colors.PRIMARY_GRAY};
  ${textVariantConfig};
`

export default {
  Text
}
