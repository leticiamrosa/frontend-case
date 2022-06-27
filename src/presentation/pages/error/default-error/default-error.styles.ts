import { Text as CustomText } from '@presentation/components/design-system/text/text'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`

const Image = styled.img`
  height: auto;
  width: 50%;
`

const Text = styled(CustomText)`
  padding: 80px 0px;
`

export default {
  ErrorWrapper,
  Image,
  Text
}
