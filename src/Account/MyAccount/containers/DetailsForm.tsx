import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { TextHeader } from 'src/Layout';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class UserDetailsForm extends React.Component<any, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <TextHeader title="Change personal data" />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item {...formItemLayout} label="Username">
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input prefix={<Icon type="user" />} />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const DetailsForm = Form.create({ name: 'user_details' })(UserDetailsForm);

export { DetailsForm };
