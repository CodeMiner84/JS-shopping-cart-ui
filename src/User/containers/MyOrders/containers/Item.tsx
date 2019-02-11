import * as React from 'react';
import { Headers } from 'src/Cart/index';
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
      <div className="ant-table ant-table-default ant-table-scroll-position-left">
        <div className="ant-table-content">
          <div className="ant-table-body">
            <table className={'table table-hover'}>
              <thead className="ant-table-thead">
                <tr>
                  <Headers>Name</Headers>
                  <Headers>Price</Headers>
                  <Headers>Quantity</Headers>
                  <Headers>Amount</Headers>
                  <Headers>&nbsp;</Headers>
                </tr>
              </thead>
              <tbody className="ant-table-tbody">
                {products.map((product: any) => (
                  <tr key={product.id} className="ant-table-row">
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>${product.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
