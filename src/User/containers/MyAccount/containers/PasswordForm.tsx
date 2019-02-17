import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import { TextHeader } from 'src/Layout/index';
import { ValidationRule, ValidateCallback } from 'antd/lib/form';
import { formItemLayout } from './constants';
import { changePassword } from '../actions';

class UserPasswordForm extends React.Component<any, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('test');
        this.props.changePassword({
          oldPassword: values.currentPassword,
          newPassword: values.password,
        });
      }
    });
  };

  comparePasswords = (rule: ValidationRule, value: string, callback: any) => {
    const form = this.props.form;
    const password = form.getFieldValue('password');

    if (value && value !== password) {
      callback('Paswords missmatch');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <TextHeader title="Change password" />
        <Form onSubmit={this.handleSubmit} className="login-form" autocomplete="off">
          <Form.Item {...formItemLayout} label="Current password">
            {getFieldDecorator('currentPassword', {
              rules: [
                { required: true, message: 'Please input your current Password!' },
              ],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                autocomplete="off"
                label="Current Password"
              />,
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="New password">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your new Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                autocomplete="off"
                label="New Password"
              />,
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Confirm new paasword">
            {getFieldDecorator('confirmPassword', {
              rules: [
                { required: true, message: 'Please confirm your Password!' },
                {
                  validator: this.comparePasswords,
                },
              ],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                autocomplete="off"
                label="Confirm Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Save
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const PasswordForm = connect(
  null,
  { changePassword },
)(Form.create({ name: 'user_details' })(UserPasswordForm));

export { PasswordForm };
