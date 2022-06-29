import styled, { css } from 'styled-components'

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
  FilterWrapper,
  WrapperChip
}
