import React from 'react'
import Styled from './chips.styles'

interface IChips {
  label: string
  isSelected?: boolean
  chipColor?: string
}

export const Chips: React.FC<IChips> = ({ label, isSelected, chipColor }: IChips) => {
  return (
    <Styled.ChipContent isSelected={isSelected} chipColor={chipColor}>
      <Styled.ChipLabel isSelected={isSelected}>{label}</Styled.ChipLabel>
    </Styled.ChipContent>
  )
}
