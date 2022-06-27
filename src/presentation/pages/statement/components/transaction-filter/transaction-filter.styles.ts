import styled from 'styled-components'

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

const WrapperChip = styled.div`
  margin-right: 40px;
  :hover {
    cursor: pointer;
  }
`

export default {
  SearchWrapper,
  FilterWrapper,
  WrapperChip
}
