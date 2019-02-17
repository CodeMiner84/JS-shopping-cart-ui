import * as React from 'react';
import { connect } from 'react-redux';
import { register } from 'src/User/actions';
import { Form, Input, Button, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Container } from 'src/User/containers/Signin/index';
import { TextHeader } from 'src/Layout/index';
const FormItem = Form.Item;

export type UserState = typeof initialUserProps;

type Props = {
  token: string;
  loading: boolean;
  register: (user: UserState) => void;
  username: string;
  email: string;
  password: string;
};

type StateProps = {
  auth: Props;
};

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const initialUserProps = {
  username: '',
  email: '',
  password: '',
};

class SignUpComponent extends React.PureComponent<
  Props & FormComponentProps,
  UserState
> {
  readonly UserProps: UserState = initialUserProps;

  handleRegister = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    this.props.form.validateFields((err, { username, email, password }: UserState) => {
      this.props.register({
        username,
        email,
        password,
      });
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };

    return (
      <Form layout="horizontal" onSubmit={this.handleRegister}>
        <FormItem {...formItemLayout} label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input placeholder="username" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(<Input placeholder="email" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(<Input placeholder="password" type="password" />)}
        </FormItem>
        <FormItem>
          <Col span={18} offset={6}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Sign in
            </Button>
          </Col>
        </FormItem>
      </Form>
    );
  }
}

const mapUserPropsToProps = ({ auth: { token } }: StateProps) => ({
  token,
});

const WrappedHorizontalSignupForm = Form.create()(SignUpComponent);

export default connect(
  mapUserPropsToProps,
  {
    register,
  },
)(WrappedHorizontalSignupForm);
