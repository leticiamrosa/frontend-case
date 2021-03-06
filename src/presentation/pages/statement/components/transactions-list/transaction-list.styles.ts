import styled, { css } from 'styled-components'
import { colors } from '@presentation/styles/theme'

const Wrapper = styled.div<{ isMobile: boolean }>`
  border: 1px solid ${colors.SECONDARY_GRAY};
  padding: 28px 36px 28px 15px;
  border-radius: 16px;
  ${({ isMobile }) =>
    isMobile &&
    css`
      padding: 28px 8px;
    `}
`

const Line = styled.div`
  height: 16px;
  width: 1px;
  background-color: ${colors.SECONDARY_GRAY};
  margin-left: 30px;
  border-radius: 2px;
`

export default {
  Wrapper,
  Line
}
