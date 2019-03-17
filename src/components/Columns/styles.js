import styled from 'styled-components'

const StyledCol4 = Col => styled(Col)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`

const StyledRow = Row => styled(Row)`
  margin-bottom: var(--size-s4) !important;
`

const StyledWrapperCol = styled.div`
  position: relative;
  float: left;
  text-align: center;
`

export { StyledCol4, StyledRow, StyledWrapperCol }
