import styled, { css } from 'styled-components'
import { Text as CustomText } from '@presentation/components/design-system/text/text'

const Text = styled(CustomText)<{ space?: boolean }>`
  ${({ space }) =>
    space &&
    css`
      padding-right: 4px;
    `}
`

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 8px 36px 8px 20px;
`

const WrapperTotal = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const WrapperDataTransactions = styled.div`
  flex: 0.98;
`

export default {
  Text,
  Content,
  WrapperTotal,
  WrapperDataTransactions
}
