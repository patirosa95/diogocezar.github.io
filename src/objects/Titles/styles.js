import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: ${({ type }) => (type === 'internal' ? '6rem' : '3.5rem')};
  text-transform: ${({ type }) => (type === 'internal' ? 'normal' : 'uppercase')};
  color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-orange)')};
  line-height: ${({ type }) => (type === 'internal' ? '6.5rem' : '4.3rem')};
  margin-bottom: ${({ type }) => (type === 'internal' ? '5rem' : '1rem')};
`

const StyledSubTitle = styled.h3`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 2.7rem;
  text-transform: uppercase;
  line-height: 3rem;
  color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-orange)')};
  margin-bottom: ${({ type }) => (type === 'internal' ? 'var(--size-s3)' : 'var(--size-s5)')};
`

const StyledTitleItemColumn = styled.h3`
  width: 100%;
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 2rem;
  color: var(--color-white);
  margin-bottom: var(--size-s1);
`

export { StyledTitle, StyledSubTitle, StyledTitleItemColumn }