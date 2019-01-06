import * as React from 'react';
import { connect } from 'react-redux';
import { Spin, Row, Col } from 'antd';
import SpinContainer from './components/SpinContainer';

type Props = typeof initialState;
type State = typeof initialState;

const initialState = { loading: false };

const Loading: React.SFC<{}> = props => {
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
