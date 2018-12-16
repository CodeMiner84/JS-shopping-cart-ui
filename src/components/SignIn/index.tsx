import * as React from 'react';
import { connect } from 'react-redux';
import { FormFeedback, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { login } from '../../actions/auth';

export interface UserProps {
  email: string;
  password: string;
}

interface SignUpProps extends UserProps {
  token: string;
  loading: boolean;
  login: (user: UserProps) => void;
}

interface OwnProps {
  auth: SignUpProps;
}

export interface SignUpState extends UserProps {
  errors: {
    [key: string]: {
      field: string;
      message: string;
    };
  };
}

class SignInComponent extends React.PureComponent<SignUpProps, SignUpState> {
  readonly state: SignUpState = {
    email: '',
    password: '',
    errors: {},
  };

  validate = () => {
    const { email, password }: SignUpState = this.state;
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
    } as Pick<SignUpState, keyof SignUpState>);
  };

  onLogin = (e: any) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (this.validate()) {
      this.props.login({
        email: email,
        password: password,
      });
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onLogin}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.onChange('email', e)
              }
              name="email"
              type="text"
              invalid={this.state.errors.email ? true : false}
              value={this.state.email}
            />
            {this.state.errors.email ? (
              <FormFeedback>{this.state.errors.email['message']}</FormFeedback>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.onChange('password', e)
              }
              name="password"
              type="password"
              invalid={this.state.errors.password ? true : false}
              value={this.state.password}
            />
            {this.state.errors.password ? (
              <FormFeedback>{this.state.errors.password['message']}</FormFeedback>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { token } }: OwnProps) => ({
  token,
});

const mapDispatchToProps = {
  login: login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInComponent);
