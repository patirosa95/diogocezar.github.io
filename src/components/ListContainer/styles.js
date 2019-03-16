import styled from 'styled-components'

const StyledListContainer = styled.ul`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledListItem = styled.li`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  list-style: none;
  border-bottom: 1px solid
    ${({ type }) => (type === 'orange' ? 'rgba(49, 36, 80, 0.36)' : 'rgba(153, 153, 153, 0.36)')};
  padding-bottom: var(--size-s1);
  margin-bottom: var(--size-s3);
  color: var(--color-purple-dark);
  &:last-child {
    border-bottom: none;
  }
  &:hover h3 {
    color: ${({ hoverColor, type }) => {
    if (hoverColor) return `var(--color-${hoverColor})`
    if (type === 'orange') return 'var(--color-purple-dark)'
    return 'var(--color-orange)'
  }}!important;
  }
`

export { StyledListContainer, StyledListItem }
