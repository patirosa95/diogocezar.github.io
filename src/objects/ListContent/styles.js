import styled from 'styled-components'

const StyledListTitle = styled.h3`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 2.6rem;
  text-transform: uppercase;
  line-height: 3rem;
  margin-bottom: 5px !important;
  text-decoration: none !important;
  color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark)' : 'var(--color-orange)')};
`

const StyledListSubTitle = styled.p`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 2.6rem;
  margin-bottom: 13px !important;
  text-decoration: none !important;
  color: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-orange-dark)'
      case 'white':
        return 'var(--color-white)'
      default:
        return 'var(--color-orange)'
    }
  }};
`

const StyledListContent = styled.p`
  color: var(--color-white);
  font-size: 1.3rem;
  padding-bottom: var(--size-s1);
  margin-bottom: 0px !important;
  line-height: 2.3rem;
`

export { StyledListTitle, StyledListSubTitle, StyledListContent }
