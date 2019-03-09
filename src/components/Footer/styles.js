import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: relative;
  float: left;
  width: 100%;
  padding-bottom: 20px;
  background-color: var(--color-purple-dark);
  margin-left: auto;
  margin-right: auto;
  padding-left: 240px;
  padding-right: 80px;
  padding-bottom: 20px;
  padding-top: 60px;
  display: flex;
  @media (max-width: 1800px) {
    padding-bottom: 80px;
    padding-top: 80px;
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (max-width: 1180px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (max-width: 700px) {
    padding-bottom: 40px;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }
`

const StyledColumnFooter = styled.div`
  width: 33.33%;
`

const StyledTitleFooter = styled.h3`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none !important;
  text-align: ${({ align }) => align || 'center'};
`

const StyledContentFooter = styled.p`
  color: var(--color-white);
  font-family: 'AGaramondPro';
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 2rem;
  margin-bottom: 30px;
  text-align: ${({ align }) => align || 'center'};
  padding: ${({ align }) => {
    switch (align) {
      case 'center':
        return '0 25%'
      case 'left':
        return '0 25% 0 0'
      case 'right':
        return '0 0 0 25%'
      default:
        return '0 25%'
    }
  }};
  a {
    color: var(--color-orange) !important;
    text-decoration: none;
  }
`

export {
  StyledFooter, StyledColumnFooter, StyledTitleFooter, StyledContentFooter,
}
