import * as React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import Row from 'reactstrap/lib/Row';
import { getProducts } from '../../actions';
import { AppState } from '../../application/index';
import { CartItem } from '../../models/cart';

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
      <React.Fragment>
        <h1>Product list</h1>
        {products !== undefined && (
          <Row>
            {Object.keys(products).map(key => (
              <Product key={key} product={products[key]} />
            ))}
          </Row>
        )}
      </React.Fragment>
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
