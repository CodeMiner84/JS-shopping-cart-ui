import * as React from 'react';
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
