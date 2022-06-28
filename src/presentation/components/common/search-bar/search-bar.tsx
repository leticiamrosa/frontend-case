import { SearchInput, ISearchInputProps } from '@presentation/components/design-system'
import React, { ReactNode } from 'react'

import Styled from './search-bar.styles'

interface ISearchBar extends ISearchInputProps{
  children?: ReactNode
}

export const SearchBar: React.FC<ISearchBar> = ({
  children,
  inputRef,
  searchTerm,
  onBlurSearch,
  onChangeSearch,
  onFocusSearch
}: ISearchBar) => {
  return (
    <Styled.SearchWrapper>
      <Styled.FilterWrapper>{children}</Styled.FilterWrapper>
      <SearchInput
        inputRef={inputRef}
        onChangeSearch={onChangeSearch}
        searchTerm={searchTerm}
        onBlurSearch={onBlurSearch}
        onFocusSearch={onFocusSearch}
      />
    </Styled.SearchWrapper>
  )
}
