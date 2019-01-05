import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from './components/SummaryComponents';
import { Button, Icon } from 'antd';
import { createOrder } from '../../actions/checkout';

type Props = {
  canMakeOrder: boolean;
  price: number;
  createOrder(): void;
};

type StateProps = {
  checkout: {
    price: number;
  };
};

const Summary: React.SFC<Props> = props => (
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
      <Button
        disabled={!props.canMakeOrder}
        type="primary"
        size="large"
        onClick={props.createOrder}
      >
        <Icon type="euro" />
        PLACE ORDER
      </Button>
    </Row>
  </Container>
);

const mapStateToProps = (state: StateProps) => {
  return {
    price: state.checkout.price,
  };
};

export default connect(
  mapStateToProps,
  {
    createOrder: createOrder,
  },
)(Summary);
