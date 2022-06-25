import styled from 'styled-components'
import { colors, fonts } from '@presentation/styles'

const SearchWrapper = styled.section`
  display: flex;
  flex: 0.6;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  flex-wrap: wrap-reverse;
`

const FilterWrapper = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: row;
`

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
  font-weight: ${fonts.REGULAR};
  line-height: 24px;
  width: 100%;
  background-color: ${colors.PRIMARY_GRAY_LIGHTEN};
  padding-left: 2%;
`

const WrapperChip = styled.div`
  margin-right: 40px;
`

export default {
  SearchWrapper,
  FilterWrapper,
  InputSearch,
  InputWrapper,
  WrapperChip
}
