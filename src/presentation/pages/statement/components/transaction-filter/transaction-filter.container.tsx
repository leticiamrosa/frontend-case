import React, { ReactNode } from 'react'
import { Chips } from '@presentation/components/design-system'
import { colors } from '@presentation/styles/theme'
import { TransactionFilterTypes, TransactionFilterLabel } from './transaction-filter-types'

import Styled from './transaction-filter.styles'
import { isMobile } from '@presentation/styles/dimensions'

interface ITransactionFilterList {
  filters?: string[]
  selectedFilter: string
  onClickFilter: (filter: string) => void
  hasSearch: boolean
}

export const TransactionFilterContainer: React.FC<ITransactionFilterList> = ({
  filters,
  selectedFilter,
  onClickFilter,
  hasSearch
}: ITransactionFilterList) => {
  const renderFilterChips = (): ReactNode => {
    if (!filters || filters.length === 0) return null

    const element = filters.map((chip) => {
      const isSecondarySelected = chip === TransactionFilterTypes.OUT
      const chipColor = isSecondarySelected && colors.SECONDARY_BLUE_LIGHTEN
      const label = TransactionFilterLabel[chip]

      const isSelected = selectedFilter === chip && !hasSearch

      const onClick = (): void => {
        onClickFilter(chip)
      }

      return (
        <Styled.WrapperChip key={chip} onClick={onClick} isMobile={isMobile()}>
          <Chips label={label} isSelected={isSelected} chipColor={chipColor} />
        </Styled.WrapperChip>
      )
    })

    return element
  }

  return <>{renderFilterChips()}</>
}
