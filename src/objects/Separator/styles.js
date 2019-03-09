import styled from 'styled-components'

const StyledSeparator = styled.header`
  width: 100%;
  border-bottom: 1px solid
    ${({ type }) => (type === 'orange' ? 'rgba(49, 36, 80, 0.36)' : 'rgba(153, 153, 153, 0.36)')};
  padding-bottom: 5px;
  margin-bottom: 100px;
  h2 {
    color: var(--color-white);
    font-family: 'AGaramondPro';
    font-style: italic;
    font-weight: normal;
    font-size: 2rem;
    span {
      font-family: 'AkzidenzGroteskBE';
      font-weight: bold;
      font-size: 2.5rem;
      font-style: normal;
      color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark);' : 'var(--color-orange);')}!important;
      margin-right: 10px;
    }
  }
`

export default StyledSeparator
