import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'src/Cart/components/SummaryComponents';
import { Button } from 'antd';
import { placeOrder } from 'src/Checkout/actions';
import StyledRow from '../components/StyledRow';

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

const Summary: React.FC<Props> = props => (
  <Container>
    <Row>
      <label>ORDER TOTAL: </label>
      <span>${props.price}</span>
    </Row>
    <StyledRow>
      <Button
        disabled={!props.canMakeOrder}
        type="primary"
        size="large"
        onClick={props.placeOrder}
      >
        PLACE ORDER
      </Button>
    </StyledRow>
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
