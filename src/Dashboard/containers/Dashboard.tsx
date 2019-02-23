import * as React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { ProductModel } from '../index';
import ProductList from './ProductList';
import withLoading from '../../Loading/WithLoading';
import Loading from '../../Loading/Loading';

type Props = {
  getProducts: () => void;
  products: ProductModel[];
  loading: boolean;
};

type StateProps = {
  product: {
    products: ProductModel[];
  };
  loading: boolean;
};

class Dashboard extends React.Component<Props> {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    return <ProductList products={this.props.products} />;
  }
}

const mapStateToProps = ({ product: { products } }: StateProps) => ({
  products,
});

export default connect(
  mapStateToProps,
  {
    getProducts,
  },
)(withLoading(Dashboard));
