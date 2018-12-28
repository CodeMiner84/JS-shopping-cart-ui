import * as React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/orders';
import { Collapse } from 'antd';
import OrderItem from './Item';
import TextHeader from '../Layout/TextHeader';

const Panel = Collapse.Panel;

class Orders extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);

    props.getOrders();
  }

  render() {
    if (Object.keys(this.props.orders).length === 0) {
      return <div />;
    }

    return (
      <React.Fragment>
        <TextHeader>Orders list</TextHeader>
        <Collapse defaultActiveKey={['1']}>
          {Object.keys(this.props.orders).map((key: any) => {
            const order = this.props.orders[key];
            const date = new Date(order.created_at).toDateString();
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
      </React.Fragment>
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
