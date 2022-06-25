import React, { ReactNode } from 'react'
import { Chips, Icon } from '@presentation/components/design-system'
import searchIcon from '@presentation//assets/images/icons/ico-search.svg'
import Styled from './search-bar.styles'
import { colors } from '@presentation/styles/theme'

const ICON_HEIGHT = 16
const ICON_WIDTH = 16

const DEFAULT_FILTERS = ['Tudo', 'Entrada', 'Saída', 'Futuro']

interface ISearchBar {
  filters?: string[]
}

export const SearchBar: React.FC<ISearchBar> = ({
  filters = DEFAULT_FILTERS
}: ISearchBar) => {
  const renderFilterChips = (): ReactNode => {
    if (!filters || filters.length === 0) return null

    const element = filters.map((chip, index) => {
      const isSecondarySelected = chip === 'Saída'
      const chipColor = isSecondarySelected && colors.SECONDARY_BLUE_LIGHTEN

      return (
        <Styled.WrapperChip key={chip}>
          <Chips label={chip} isSelected={index === 0} chipColor={chipColor} />
        </Styled.WrapperChip>
      )
    })

    return element
  }

  return (
    <Styled.SearchWrapper>
      <Styled.FilterWrapper>{renderFilterChips()}</Styled.FilterWrapper>
      <Styled.InputWrapper>
        <Icon
          icon={searchIcon}
          iconHeight={ICON_HEIGHT}
          iconWidth={ICON_WIDTH}
        />
        <Styled.InputSearch type="text" alt="icon-search" placeholder="Pesquisar"/>
      </Styled.InputWrapper>
    </Styled.SearchWrapper>
  )
}
