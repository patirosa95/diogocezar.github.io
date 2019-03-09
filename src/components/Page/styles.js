import styled from 'styled-components'

const StyledWrapper = styled.div`
  background-color: ${({ color }) => `var(--color-${color})` || 'var(--color-purple)'}!important;
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
`

export default StyledWrapper
