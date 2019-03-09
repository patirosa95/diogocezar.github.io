import styled from 'styled-components'

const StyledListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid rgba(153, 153, 153, 0.36);
  margin-bottom: 20px;
  &:last-child {
    border-bottom: none;
  }
  &:hover h3 {
    color: var(--color-purple-dark);
  }
`

export default StyledListItem
