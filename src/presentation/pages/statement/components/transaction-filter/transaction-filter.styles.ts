import styled, { css } from 'styled-components'

const SearchWrapper = styled.section`
  display: flex;
  flex: 0.6;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  flex-wrap: wrap-reverse;
`

const FilterWrapper = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: row;
`

const WrapperChip = styled.div<{ isMobile: boolean }>`
  margin-right: 40px;
  :hover {
    cursor: pointer;
  }

  ${({ isMobile }) => isMobile && css`
      margin-right: 16px;
      margin-top: 24px;
  `}
`

export default {
  SearchWrapper,
  FilterWrapper,
  WrapperChip
}
