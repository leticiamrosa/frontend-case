import styled from 'styled-components'
import { colors } from '@presentation/styles/theme'

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex: 1;
  background-color: ${colors.WHITE};
  flex-direction: column;
  padding-left: ${({ isMobile }) => (isMobile ? 4 : 20)}%;
  padding-right: ${({ isMobile }) => (isMobile ? 4 : 20)}%;
`

export default { Wrapper }
