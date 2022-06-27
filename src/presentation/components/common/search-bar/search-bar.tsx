import React, { ReactNode } from 'react'
import { Icon } from '@presentation/components/design-system'
import searchIcon from '@presentation//assets/images/icons/ico-search.svg'
import Styled from './search-bar.styles'

const ICON_HEIGHT = 16
const ICON_WIDTH = 16

interface ISearchBar {
  children?: ReactNode
}

export const SearchBar: React.FC<ISearchBar> = ({
  children
}: ISearchBar) => {
  return (
    <Styled.SearchWrapper>
      <Styled.FilterWrapper>{children}</Styled.FilterWrapper>
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
