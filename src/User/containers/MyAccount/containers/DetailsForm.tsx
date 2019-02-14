import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { TextHeader } from 'src/Layout/index';
import { connect } from 'react-redux';
import { updatePersonalData } from '../actions';
import { tokenRequest } from '../../../actions';
import { InputPersonalDataModel } from '../dtos/input.personal-data.model';
import { FormComponentProps } from 'antd/lib/form';

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

type Props = {
  updatePersonalData: (values: any) => void;
  user: InputPersonalDataModel;
  tokenRequest: () => void;
};

class UserDetailsForm extends React.Component<Props & FormComponentProps, {}> {
  constructor(props: Props) {
    super(props);
    // const token = await this.props.tokenRequest();

    // console.log('this.props', this.props);

    console.log('this.props.user ###################', props.user);
    // console.log('token', token);
    props.form.setFields({
      username: {
        value: props.user.username,
      },
      firstName: {
        value: props.user.firstName,
      },
      lastName: {
        value: props.user.lastName,
      },
    });
  }

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
            {getFieldDecorator('username', {
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

type StateProps = {
  auth: {
    user: InputPersonalDataModel;
  };
};

const mapStateToProps = ({ auth: { user } }: StateProps) => ({
  user,
});

const AntUserForm = Form.create({ name: 'user_details' })(UserDetailsForm);

const DetailsForm = connect(
  mapStateToProps,
  {
    updatePersonalData,
    tokenRequest,
  },
)(AntUserForm);

export { DetailsForm };
