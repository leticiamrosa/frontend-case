import React, { ChangeEvent, FocusEvent, RefObject } from 'react'
import { Icon } from '@presentation/components/design-system'
import searchIcon from '@presentation//assets/images/icons/ico-search.svg'

import Styled from './input-search.style'

const ICON_HEIGHT = 16
const ICON_WIDTH = 16

export interface ISearchInputProps {
  inputRef?: RefObject<HTMLInputElement>
  searchTerm?: string
  type?: string
  autoComplete?: string
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
  onBlurSearch?: (e: FocusEvent<HTMLInputElement>) => void
  onFocusSearch?: (e: FocusEvent<HTMLInputElement>) => void
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  inputRef,
  searchTerm,
  onBlurSearch,
  onChangeSearch,
  onFocusSearch
}: ISearchInputProps) => {
  return (
    <Styled.InputWrapper>
      <Icon icon={searchIcon} iconHeight={ICON_HEIGHT} iconWidth={ICON_WIDTH} />
      <Styled.InputSearch
        ref={inputRef}
        type="text"
        alt="icon-search"
        placeholder="Pesquisar"
        onChange={onChangeSearch}
        value={searchTerm}
        onBlur={onBlurSearch}
        onFocus={onFocusSearch}
      />
    </Styled.InputWrapper>
  )
}
