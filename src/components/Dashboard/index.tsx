import * as React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { Row, Col } from 'antd';
import { getProducts } from '../../actions';
import { AppState } from '../../application/index';
import { CartItem } from '../../models/cart';
import TextHeader from '../Layout/TextHeader';

interface DashboardProps {
  readonly getProducts: () => void;
}

class Dashboard extends React.Component<DashboardProps & AppState, any> {
  constructor(props: DashboardProps & AppState) {
    super(props);

    props.getProducts();
  }

  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <div />;
    }

    return (
      <Row>
        <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
          <TextHeader>Product list</TextHeader>
          {products !== undefined && (
            <Row gutter={12}>
              {Object.keys(products).map(key => (
                <Product key={key} product={products[key]} />
              ))}
            </Row>
          )}
        </Col>
      </Row>
    );
  }
}

interface MyProps {
  product: {
    products: CartItem;
  };
  loading: () => void;
  user: any;
}

const mapStateToProps = ({ product: { products }, loading, user }: MyProps) => ({
  products,
  loading,
  user,
});

const mapDispatchToProps = {
  getProducts: getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
