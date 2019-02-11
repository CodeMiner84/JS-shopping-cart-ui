import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { TextHeader } from 'src/Layout';
import { connect } from 'react-redux';
import { updatePersonalData } from '../actions';

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
        this.props.updatePersonalData(values);
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
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="First name">
            {getFieldDecorator('firstName', {
              rules: [{ required: true, message: 'Please input your first name!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Last name">
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Please input your last name!' }],
            })(<Input />)}
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

const mapStateToProps = (state: any) => {
  console.log('state in composnent', state);

  return {
    test: 123,
  };
};

const AntUserForm = Form.create({ name: 'user_details' })(UserDetailsForm);

const DetailsForm = connect(
  mapStateToProps,
  {
    updatePersonalData,
  },
)(AntUserForm);

export { DetailsForm };
