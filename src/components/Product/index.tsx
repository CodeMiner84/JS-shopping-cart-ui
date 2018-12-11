import * as React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import Row from 'reactstrap/lib/Row';
import { getProducts } from '../../actions';
import { AppState } from '../../application/index';

interface ProductProps {
  readonly getProducts: () => void;
}

class Products extends React.Component<ProductProps & AppState, any> {
  constructor(props: ProductProps & AppState) {
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

const mapStateToProps = (state: Partial<ProductProps>) => state;

const mapDispatchToProps = {
  getProducts: getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
