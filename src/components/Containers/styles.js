import styled from 'styled-components'

const StyledPage = styled.div`
  background-color: ${({ color }) => `var(--color-${color})` || 'var(--color-purple)'}!important;
  position: relative;
  float: left;
  width: 100%;
`

const StyledSection = styled.section`
  position: relative;
  float: left;
  width: 100%;
  padding-bottom: var(--size-s4);
`

const StyledWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--size-s6);
  padding-right: var(--size-s6);
  padding-bottom: var(--size-s5);
  padding-top: var(--size-s5);
  @media (max-width: 1800px) {
    padding-bottom: var(--size-s5);
    padding-top: var(--size-s5);
    padding-left: var(--size-s6);
    padding-right: var(--size-s6);
  }
  @media (max-width: 1180px) {
    padding-left: var(--size-s4);
    padding-right: var(--size-s4);
  }
  @media (max-width: 700px) {
    padding-bottom: var(--size-s3);
    padding-top: var(--size-s1);
    padding-left: var(--size-s1);
    padding-right: var(--size-s1);
  }
`

export { StyledPage, StyledSection, StyledWrapper }
