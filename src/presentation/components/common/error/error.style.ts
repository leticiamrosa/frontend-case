import styled from 'styled-components'
import { Text as CustomText } from '@presentation/components/design-system/text/text'
import { colors } from '@presentation/styles/theme'

const ErrorWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 200px 0px;
`

const Text = styled(CustomText)`
  color: ${colors.PRIMARY_HIGHLIGHT};
`

export default {
  Text,
  ErrorWrapper
}
