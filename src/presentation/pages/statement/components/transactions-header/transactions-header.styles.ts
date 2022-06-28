import styled from 'styled-components'
import { Text as CustomText } from '@presentation/components/design-system/text/text'

const Text = styled(CustomText)``

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 40px 36px 8px 20px;
  flex-wrap: wrap;
`

const WrapperTotal = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
`

const WrapperData = styled.div`
  flex: 1;
  flex-wrap: wrap;
`

const WrapperDataTransactions = styled.div`
  flex: 0.98;
  flex-wrap: wrap;
`

const WrapperTransactionType = styled.div`
  flex: 1;
  padding-top: 2px;
  flex-wrap: wrap;
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
