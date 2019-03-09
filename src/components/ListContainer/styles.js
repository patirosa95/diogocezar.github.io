import styled from 'styled-components'

const StyledListContainer = styled.ul`
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
`

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

export { StyledListContainer, StyledListItem }
