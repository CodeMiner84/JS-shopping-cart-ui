import * as React from 'react';
import { Headers } from 'src/Cart';
import { Container, Row as SummaryRow } from 'src/Cart/components/SummaryComponents';
import { OrderProps } from '../models/UserOrder';

type Props = {
  order: OrderProps;
};

const OrderItem: React.SFC<Props> = ({ order }: Props) => {
  const products = order.orderItems;
  return (
    <React.Fragment>
      <h5>Ordered products</h5>
      <table className={'table table-hover'}>
        <thead>
          <tr>
            <Headers>Name</Headers>
            <Headers>Price</Headers>
            <Headers>Quantity</Headers>
            <Headers>Amount</Headers>
            <Headers>&nbsp;</Headers>
          </tr>
        </thead>
        {products.map((product: any) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>${product.amount}</td>
          </tr>
        ))}
      </table>
      <Container>
        <SummaryRow>
          <label>TOTAL: </label>
          <span>${order.price}</span>
        </SummaryRow>
      </Container>
    </React.Fragment>
  );
};

export default OrderItem;
