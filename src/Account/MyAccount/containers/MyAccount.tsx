import * as React from 'react';
import { Row, Col } from 'antd';
import { TextHeader } from 'src/Layout';

class MyAccount extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <TextHeader title="My account" />
      </>
    );
  }
}

export default MyAccount;
