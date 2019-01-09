import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from '../../Cart/components/SummaryComponents';
import { Button } from 'antd';
import { placeOrder } from '../../Checkout/actions';

type Props = {
  canMakeOrder: boolean;
  price: number;
  placeOrder(): void;
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
        onClick={props.placeOrder}
      >
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
    placeOrder,
  },
)(Summary);
