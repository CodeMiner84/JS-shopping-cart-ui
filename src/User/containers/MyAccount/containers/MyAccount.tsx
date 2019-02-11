import * as React from 'react';
import { Row, Col } from 'antd';
import { TextHeader } from 'src/Layout/index';
import { DetailsForm } from './DetailsForm';
import { PasswordForm } from './PasswordForm';

class MyAccount extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <DetailsForm />
        <PasswordForm />
      </>
    );
  }
}

export { MyAccount };
