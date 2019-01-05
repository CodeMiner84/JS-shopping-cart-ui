import * as React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/orders';
import { Collapse } from 'antd';
import OrderItem from './Item';
import TextHeader from '../Layout/components/TextHeader';
import { Row, Col } from 'antd';

const Panel = Collapse.Panel;

export type OrderProps = {
  _id: string;
  customer_id: number;
  price: number;
  created_at: Date;
  products: OrderProductProps[];
};

export type OrderProductProps = {
  _id: string;
  amount: number;
  created_at: Date;
  order_id: string;
  price: number;
  product_id: string;
  quantity: number;
  title: string;
};

type Props = {
  getOrders: () => void;
  orders: OrderProps[];
};

class Orders extends React.Component<Props> {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    if (Object.keys(this.props.orders).length === 0) {
      return <div />;
    }

    return (
      <Row>
        <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
          <TextHeader title="Orders list" />
          <Collapse defaultActiveKey={['1']}>
            {Object.keys(this.props.orders).map((key: any) => {
              const order = this.props.orders[key];
              return (
                <Panel
                  header={`Order: ${order._id} (Amount: $${order.price})`}
                  key={order._id}
                >
                  <OrderItem order={order} />
                </Panel>
              );
            })}
          </Collapse>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ orders: { orders } }: any) => ({
  orders,
});

const mapDispatchToProps = {
  getOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
