import styled from 'styled-components'

const StyledPage = styled.div`
  background-color: ${({ color }) => `var(--color-${color})` || 'var(--color-purple)'}!important;
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
`

const StyledSection = styled.section`
  position: relative;
  float: left;
  width: 100%;
  padding-bottom: 60px;
`

const StyledWrapper = styled.div`
  position: relative;
  float: left;
  margin-left: auto;
  margin-right: auto;
  padding-left: 240px;
  padding-right: 80px;
  padding-bottom: 80px;
  padding-top: 80px;
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

export { StyledPage, StyledSection, StyledWrapper }
