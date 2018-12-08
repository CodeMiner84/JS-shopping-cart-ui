import * as React from 'react';
import { connect } from 'react-redux';
// import { products } from '../../api/fixtures/products';
import { Product } from './Product';
import Row from 'reactstrap/lib/Row';
import { getNews } from '../../actions';

class Products extends React.Component<any, any> {
  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);

    const { products } = this.props;

    console.log('products', products);

    return (
      <React.Fragment>
        <button onClick={this.props.getNews}>Click me</button>
        <h1>Product list</h1>
        <Row>
          {products !== undefined && (
            <React.Fragment>
              {Object.keys(products).map(key => (
                <Product key={key} {...products[key]} />
              ))}
            </React.Fragment>
          )}
        </Row>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: any) {
  console.log(state);

  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  getNews: getNews,
};

const EnhancedProducts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
export default EnhancedProducts;
