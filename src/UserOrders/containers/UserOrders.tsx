import * as React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../actions';
import { Collapse } from 'antd';
import OrderItem from './Item';
import { TextHeader } from 'src/Layout';
import { Row, Col } from 'antd';
import { OrderProps } from '../models/UserOrder';
import Loading from '../../Loading/Loading';
import withLoading from 'src/Loading/WithLoading';

const Panel = Collapse.Panel;

type Props = {
  getOrders: () => void;
  orders: OrderProps[];
  loading: boolean;
};

class Orders extends React.Component<Props> {
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
)(withLoading(Orders));
