import * as React from 'react';
import { connect } from 'react-redux';
import Price from '../Dashboard/Price';
import { Container, Row } from './components/SummaryComponents';
import { Button, Icon } from 'antd';
import { createOrder } from '../../actions/checkout';

const Summary: React.SFC<any> = props => (
  <Container>
    <Row>
      <label>ORDER TOTAL: </label>
      <span>${props.price}</span>
    </Row>
    <Row
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
      }}
    >
      <Button type="primary" size="large" onClick={props.createOrder}>
        <Icon type="euro" />
        PLACE ORDER
      </Button>
    </Row>
  </Container>
);

const mapStateToProps = (state: any) => {
  return {
    price: state.checkout.price,
  };
};

const mapDispatchToProps = {
  createOrder: createOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Summary);
