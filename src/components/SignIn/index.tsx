import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { login } from '../../actions/auth';
import { FormComponentProps } from 'antd/lib/form';
import Container from './Container';

const FormItem = Form.Item;

export interface UserState {
  email: string;
  password: string;
}

interface SignInProps extends FormComponentProps {
  email: string;
  password: string;
  token: string;
  error: boolean;
  loading: boolean;
  login: (user: UserState) => void;
}

interface OwnProps {
  auth: SignInProps;
}

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignInComponent extends React.PureComponent<SignInProps, UserState> {
  readonly state: UserState = {
    email: '',
    password: '',
  };

  constructor(props: SignInProps) {
    super(props);
  }

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
    const { getFieldDecorator, getFieldsError } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };

    return (
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 14, offset: 5 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 6 }}
        >
          <Container>
            <Form layout="horizontal" onSubmit={this.handleLogin}>
              <FormItem {...formItemLayout} label="Email">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="email"
                  />,
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="Password">
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
