import styled from 'styled-components'
import { colors, fonts } from '@presentation/styles'

interface ChipsContentProps {
  isSelected?: boolean
  chipColor?: string
}

const chipsBackgroundColor = ({ isSelected, chipColor }: ChipsContentProps): string => {
  if (isSelected) {
    return `background-color: ${colors.PRIMARY_HIGHLIGHT}`
  }

  if (!isSelected && !!chipColor) {
    return `background-color: ${chipColor}`
  }

  return `background-color: ${colors.WHITE}`
}

const ChipContent = styled.div<ChipsContentProps>`
  display: flex;
  height: 32px;
  width: auto;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  ${chipsBackgroundColor}
`

const ChipLabel = styled.span<{ isSelected?: boolean }>`
  font-size: 16px;
  font-weight: ${fonts.REGULAR};
  line-height: 24px;
  padding: 0px 16px 0px 16px;
  color: ${({ isSelected }) =>
    isSelected ? colors.WHITE : colors.PRIMARY_HIGHLIGHT};
`

export default {
  ChipContent,
  ChipLabel
}
