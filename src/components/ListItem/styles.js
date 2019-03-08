import styled from 'styled-components'

const StyledListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid var(--color-purple-dark);
  margin-bottom: 20px;
  &:last-child {
    border-bottom: none;
  }
`

export default StyledListItem
