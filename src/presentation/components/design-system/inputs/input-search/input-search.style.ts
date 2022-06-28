import styled from 'styled-components'
import { colors, fontWeight } from '@presentation/styles/theme'

const InputWrapper = styled.div`
  height: 64px;
  background-color: ${colors.PRIMARY_GRAY_LIGHTEN};
  align-items: center;
  display: flex;
  flex: 1;
  border-radius: 16px;
  padding: 0px 20px 0px 20px;
`

const InputSearch = styled.input`
  font-size: 16px;
  font-weight: ${fontWeight.REGULAR};
  line-height: 24px;
  width: 100%;
  background-color: ${colors.PRIMARY_GRAY_LIGHTEN};
  padding-left: 2%;
`

export default {
  InputSearch,
  InputWrapper
}
