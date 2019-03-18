import React from 'react'
import { Form as FormAntd, Input as InputAntd } from 'antd'
import { StyledFormItem, StyledInput, StyledTextArea } from './styles'

const FormItemStyled = StyledFormItem(FormAntd.Item)
const InputStyled = StyledInput(InputAntd)
const TextAreaStyled = StyledTextArea(InputAntd.TextArea)

const FormItem = props => <FormItemStyled {...props} />
const Input = props => <InputStyled {...props} />
const TextArea = props => <TextAreaStyled {...props} />

export { FormItem, TextArea, Input }
