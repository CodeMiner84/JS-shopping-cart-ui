import * as React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../actions';
import { Collapse } from 'antd';
import OrderItem from './Item';
import { TextHeader } from '../../../../Layout/index';
import { OrderProps } from '../models/UserOrder';
import withLoading from '../../../../Loading/WithLoading';
import Loading from '../../../../Loading/Loading';

const Panel = Collapse.Panel;

type Props = {
  getOrders: () => void;
  orders: OrderProps[];
  loading: boolean;
};

class MyOrders extends React.Component<Props> {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    if (Object.keys(this.props.orders).length === 0) {
      return <div />;
    }

    return (
      <>
        <TextHeader title="Orders list" />
        <Collapse defaultActiveKey={['1']}>
          {Object.keys(this.props.orders).map((key: string) => {
            const order = this.props.orders[key];
            return (
              <Panel
                header={`Order: ${order.id} (Amount: $${order.price})`}
                key={order.id}
              >
                <OrderItem order={order} />
              </Panel>
            );
          })}
        </Collapse>
      </>
    );
  }
}

type StateProps = {
  orders: {
    orders: OrderProps[];
  };
};

const mapStateToProps = ({ orders: { orders } }: StateProps) => ({
  orders,
});

const mapDispatchToProps = {
  getOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withLoading(MyOrders));
