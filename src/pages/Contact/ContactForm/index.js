import React from 'react'

import { Form } from 'antd'

import { Section } from '../../../components/Containers'
import { RightContent, CenterContent } from '../../../components/AlignContent'
import { Col2, Col1, Row } from '../../../components/Grid'

import Separator from '../../../objects/Separator'
import Paragraph from '../../../objects/Paragraph'
import { FormItem, Input, TextArea } from '../../../objects/Form'
import Button from '../../../objects/Button'

const ContactForm = (props) => {
  const { getFieldDecorator } = props.form
  return (
    <Section>
      <Separator number="03" title="Contact Form" />
      <RightContent>
        <Paragraph first="Let's keep in contact" hasQuotedMarks={false}>
          You can send-me a message thought this form. Please let-me know your name and e-mail to
          prepare a cool response.
        </Paragraph>
        <Row bottom="1.3rem">
          <Col2>
            <FormItem label="Name" colon={false}>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Por favor insira seu nome' }],
              })(<Input />)}
            </FormItem>
          </Col2>
          <Col2>
            <FormItem label="Email" colon={false}>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Por favor insira seu nome' }],
              })(<Input />)}
            </FormItem>
          </Col2>
        </Row>
        <Row bottom="1.3rem">
          <Col1>
            <FormItem label="Message" colon={false}>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: 'Por favor insira seu nome' }],
              })(<TextArea />)}
            </FormItem>
          </Col1>
        </Row>
        <Row bottom="1.3rem">
          <CenterContent>
            <Button type="orange">Send</Button>
          </CenterContent>
        </Row>
      </RightContent>
    </Section>
  )
}

const ContactFormWithForm = Form.create()(ContactForm)

export default ContactFormWithForm
