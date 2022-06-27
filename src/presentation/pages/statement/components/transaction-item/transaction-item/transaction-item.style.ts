import styled, { css } from 'styled-components'
import { Icon } from '@presentation/components/design-system'
import { Text as CustomText } from '@presentation/components/design-system/text/text'
import { fontWeight } from '@presentation/styles/theme'

const Content = styled.div<{ isFirstItem: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  ${({ isFirstItem }) =>
    !isFirstItem &&
    css`
      padding-top: 32px;
    `}
`

const TransactionIcon = styled(Icon)`
  margin-right: 16px;
`

const WrapperIconAndUserName = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`

const Text = styled(CustomText)<{
  bold?: boolean
  space?: boolean
  isRefunded?: boolean
}>`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${fontWeight.BOLD};
    `}

  ${({ space }) =>
    space &&
    css`
      padding-right: 4px;
    `}

    ${({ isRefunded }) =>
    isRefunded &&
    css`
      text-decoration: line-through;
    `}
`

const TransactionLabel = styled(Text)``

const WrappperTransactionLabel = styled.div`
  flex: 1;
  align-items: center;
`

const WrapperDate = styled.div`
  flex: 1;
  align-items: center;
`

const WrapperTotal = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export default {
  Content,
  WrapperIconAndUserName,
  WrapperTotal,
  WrapperDate,
  WrappperTransactionLabel,
  TransactionLabel,
  Text,
  TransactionIcon
}
