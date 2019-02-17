import * as React from 'react';
import { Form, Input, Button } from 'antd';
import { TextHeader } from 'src/Layout/index';
import { connect } from 'react-redux';
import { updatePersonalData } from '../actions';
import { tokenRequest } from '../../../actions';
import { InputPersonalDataModel } from '../dtos/input.personal-data.model';
import { FormComponentProps } from 'antd/lib/form';
import { formItemLayout } from './constants';

type Props = {
  updatePersonalData: (values: any) => void;
  user: InputPersonalDataModel;
  tokenRequest: () => void;
  form: FormComponentProps;
};

class UserDetailsForm extends React.Component<Props & FormComponentProps, {}> {
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
              initialValue: this.props.user.username,
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="First name">
            {getFieldDecorator('firstName', {
              initialValue: this.props.user.firstName,
              rules: [{ required: true, message: 'Please input your first name!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Last name">
            {getFieldDecorator('lastName', {
              initialValue: this.props.user.lastName,
              rules: [{ required: true, message: 'Please input your last name!' }],
            })(<Input />)}
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
