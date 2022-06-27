import React, { ReactNode } from 'react'
import { Chips } from '@presentation/components/design-system'
import { colors } from '@presentation/styles/theme'
import { TransactionFilterTypes, TransactionFilterLabel } from './transaction-filter-types'

import Styled from './transaction-filter.styles'

interface ITransactionFilterList {
  filters?: string[]
  selectedFilter: string
  onClickFilter: (filter: string) => void
}

export const TransactionFilterContainer: React.FC<ITransactionFilterList> = ({
  filters,
  selectedFilter,
  onClickFilter
}: ITransactionFilterList) => {
  const renderFilterChips = (): ReactNode => {
    if (!filters || filters.length === 0) return null

    const element = filters.map((chip) => {
      const isSecondarySelected = chip === TransactionFilterTypes.WITHDRAW
      const chipColor = isSecondarySelected && colors.SECONDARY_BLUE_LIGHTEN
      const label = TransactionFilterLabel[chip]

      const isSelected = selectedFilter === chip

      const onClick = (): void => {
        onClickFilter(chip)
      }

      return (
        <Styled.WrapperChip key={chip} onClick={onClick}>
          <Chips label={label} isSelected={isSelected} chipColor={chipColor} />
        </Styled.WrapperChip>
      )
    })

    return element
  }

  return <>{renderFilterChips()}</>
}
