import styled from 'styled-components'

const StyledCol4 = Col => styled(Col)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  border-right: 1px solid rgba(153, 153, 153, 0.36);
  &:last-child {
    border-right: none !important;
  }
`

const StyledCol2 = Col => styled(Col)``

const StyledCol1 = Col => styled(Col)``

const StyledRow = Row => styled(Row)`
  margin-bottom: ${({ bottom }) => bottom || 'var(--size-s6)'}!important;
`

const StyledWrapperCol = styled.div`
  position: relative;
  float: left;
  text-align: center;
`

export {
  StyledCol4, StyledCol2, StyledCol1, StyledRow, StyledWrapperCol,
}
