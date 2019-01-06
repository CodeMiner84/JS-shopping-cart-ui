import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { login } from 'src/Auth/actions';
import { FormComponentProps } from 'antd/lib/form';
import Container from '../components/Container';
import { TextHeader } from 'src/Layout';
import { hasErrors } from 'src/Auth/selectors';

const FormItem = Form.Item;

type State = typeof initialState;

type Props = {
  email: string;
  password: string;
  token: string;
  error: boolean;
  loading: boolean;
  login: (user: State) => void;
};

type StateProps = {
  auth: Partial<Props>;
};

const initialState = { email: '', password: '' };

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

class SignInComponent extends React.PureComponent<Props & FormComponentProps, State> {
  readonly state: State = initialState;

  handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
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

    return (
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 14, offset: 5 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 8, offset: 8 }}
        >
          <Container>
            <Form layout="horizontal" onSubmit={this.handleLogin}>
              <TextHeader title="Sign in" />
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

const mapStateToProps = ({ auth: { token, error } }: StateProps) => ({
  token,
  error,
});

const WrappedHorizontalLoginForm = Form.create()(SignInComponent);

export default connect(
  mapStateToProps,
  {
    login,
  },
)(WrappedHorizontalLoginForm);
