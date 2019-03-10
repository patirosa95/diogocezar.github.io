import styled from 'styled-components'

const StyledListTitle = styled.h3`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 2.6rem;
  text-transform: uppercase;
  line-height: 3rem;
  margin-bottom: 0.5rem;
  text-decoration: none !important;
  color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark)' : 'var(--color-orange)')};
`

const StyledListSubTitle = styled.p`
  color: var(--color-white);
  font-size: 1.4rem;
  padding-bottom: var(--size-s1);
`

export { StyledListTitle, StyledListSubTitle }
