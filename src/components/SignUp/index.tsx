import * as React from 'react';
import { connect } from 'react-redux';
import { FormFeedback, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { register } from '../../actions/auth';

export interface UserProps {
  name: string;
  email: string;
  password: string;
}

interface SignUpProps extends UserProps {
  token: string;
  loading: boolean;
  register: (user: UserProps) => void;
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

class SignUpComponent extends React.PureComponent<SignUpProps, SignUpState> {
  readonly state: SignUpState = {
    name: '',
    email: '',
    password: '',
    errors: {},
  };

  validate = () => {
    const { email, password, name }: SignUpState = this.state;
    const errors = {};

    if (name === '') {
      const key = 'name';
      errors[key] = {
        field: 'name',
        message: 'Name is required',
      };
    }
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

  onRegister = (e: any) => {
    e.preventDefault();

    const { email, password, name } = this.state;

    if (this.validate()) {
      this.props.register({
        name,
        email,
        password,
      });
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onRegister}>
          <FormGroup>
            <Label htmlFor="email">Username</Label>
            <Input
              id="name"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.onChange('name', e)
              }
              name="name"
              type="text"
              invalid={this.state.errors.name ? true : false}
              value={this.state.name}
            />
            {this.state.errors.email ? (
              <FormFeedback>{this.state.errors.email['message']}</FormFeedback>
            ) : null}
          </FormGroup>
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
  register: register,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpComponent);
