import styled from 'styled-components'
import { colors, fonts } from '@presentation/styles'

const HeaderWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex: 1;
  background-color: ${colors.WHITE};
  height: 90px;
  align-items: center;
  padding-left: ${({ isMobile }) => isMobile ? 20 : 200}px;
  border-bottom: 1px ${colors.SECONDARY_GRAY_LIGHTEN} solid;
`

const Title = styled.h3`
  color: ${colors.PRIMARY_GRAY};
  font-size: 22px;
  line-height: 32px;
  font-weight: ${fonts.BOLD};
`

export default {
  HeaderWrapper,
  Title
}
