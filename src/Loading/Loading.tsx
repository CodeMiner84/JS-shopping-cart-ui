import * as React from 'react';
import { Spin, Row, Col } from 'antd';
import SpinContainer from './components/SpinContainer';

const Loading: React.FC<{}> = () => {
  return (
    <Row>
      <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      </Col>
    </Row>
  );
};

export default Loading;
