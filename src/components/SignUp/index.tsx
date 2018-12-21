import * as React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Form, Input, Button, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import Container from '../SignIn/Container';
const FormItem = Form.Item;

export interface UserProps {
  name: string;
  email: string;
  password: string;
}

interface SignUpProps extends FormComponentProps {
  token: string;
  loading: boolean;
  register: (user: UserProps) => void;
  name: string;
  email: string;
  password: string;
}

interface OwnProps {
  auth: SignUpProps;
}

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignUpComponent extends React.PureComponent<SignUpProps, UserProps> {
  readonly state: UserProps = {
    name: '',
    email: '',
    password: '',
  };

  constructor(props: SignUpProps) {
    super(props);
  }

  handleRegister = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields((err, { name, email, password }: any) => {
      this.props.register({
        name,
        email,
        password,
      });
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

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
          lg={{ span: 8, offset: 8 }}
        >
          <Container>
            <Form layout="horizontal" onSubmit={this.handleRegister}>
              <FormItem {...formItemLayout} label="Name">
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!' }],
                })(<Input placeholder="name" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Email">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(<Input placeholder="email" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Password">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your password!' }],
                })(<Input placeholder="password" />)}
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

const mapStateToProps = ({ auth: { token } }: OwnProps) => ({
  token,
});

const mapDispatchToProps = {
  register: register,
};

const WrappedHorizontalSignupForm = Form.create()(SignUpComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedHorizontalSignupForm);
