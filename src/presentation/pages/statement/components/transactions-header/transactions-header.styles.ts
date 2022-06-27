import styled from 'styled-components'
import { Text as CustomText } from '@presentation/components/design-system/text/text'

const Text = styled(CustomText)``

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 40px 36px 8px 20px;
`

const WrapperTotal = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const WrapperData = styled.div`
  flex: 1;
`

const WrapperDataTransactions = styled.div`
  flex: 0.98;
`

const WrapperTransactionType = styled.div`
  flex: 1;
  padding-top: 2px;
  flex-wrap: wrap;
`

export default {
  Text,
  Content,
  WrapperTotal,
  WrapperData,
  WrapperDataTransactions,
  WrapperTransactionType
}
