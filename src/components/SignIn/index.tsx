import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { login } from '../../actions/auth';
import { FormComponentProps } from 'antd/lib/form';
import Container from './Container';

const FormItem = Form.Item;

export interface UserProps {
  email: string;
  password: string;
}

interface SignInProps extends FormComponentProps {
  email: string;
  password: string;
  token: string;
  error: boolean;
  loading: boolean;
  login: (user: UserProps) => void;
}

interface OwnProps {
  auth: SignInProps;
}

export interface SignInState extends UserProps {
  errors: {
    [key: string]: {
      field: string;
      message: string;
    };
  };
}

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignInComponent extends React.PureComponent<SignInProps, SignInState> {
  readonly state: SignInState = {
    email: '',
    password: '',
    errors: {},
  };

  constructor(props: SignInProps) {
    super(props);

    console.log('this.props.form', this.props.form);
    this.props.form.validateFields();
  }

  validate = () => {
    const { email, password }: SignInState = this.state;
    const errors = {};

    if (email === '') {
      const key = 'email';
      errors[key] = {
        field: 'email',
        message: 'Email is required',
      };
    }
    if (password === '') {
      const key = 'password';
      errors[key] = {
        field: 'password',
        message: 'Password is required',
      };
    }

    this.setState({
      errors,
    });

    return Object.keys(errors).length === 0;
  };

  onChange = (field: string, e: any) => {
    this.setState({
      [field]: e.target.value,
    } as Pick<SignInState, keyof SignInState>);
  };

  handleLogin = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login({
          email: values.email,
          password: values.password,
        });
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };

    return (
      <Row>
        <Col span={6} offset={9}>
          <Container>
            <Form layout="horizontal" onSubmit={this.handleLogin}>
              <FormItem
                {...formItemLayout}
                label="Email"
                validateStatus={emailError ? 'error' : ''}
                help={emailError || ''}
              >
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="email"
                  />,
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Password"
                validateStatus={passwordError ? 'error' : ''}
                help={passwordError || ''}
              >
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
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
          </Container>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ auth: { token, error } }: OwnProps) => ({
  token,
  error,
});

const mapDispatchToProps = {
  login: login,
};

const WrappedHorizontalLoginForm = Form.create()(SignInComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedHorizontalLoginForm);
