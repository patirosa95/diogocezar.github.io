import React from 'react'
import { Col as ColAntd, Row as RowAntd } from 'antd'

import { StyledCol4, StyledRow, StyledWrapperCol } from './styles'

const Col4Styled = StyledCol4(ColAntd)
const RowStyled = StyledRow(RowAntd)

const defaultGutter = 16

const defaultCol4 = {
  xs: {
    span: 24,
  },
  md: {
    span: 6,
  },
  lg: {
    span: 6,
  },
}

const Row = ({ children }) => <RowStyled gutter={defaultGutter}>{children}</RowStyled>

const Col4 = ({ children }) => <Col4Styled {...defaultCol4}>{children}</Col4Styled>

const WrapperCol = ({ children }) => (
  <StyledWrapperCol {...defaultCol4}>{children}</StyledWrapperCol>
)

export { Row, Col4, WrapperCol }
