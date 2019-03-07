import styled from 'styled-components'

const StyledWrapper = styled.div`
  max-width: 1888.9px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 325px;
  padding-right: 130px;
  padding-bottom: 130px;
  padding-top: 130px;
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

export default StyledWrapper
