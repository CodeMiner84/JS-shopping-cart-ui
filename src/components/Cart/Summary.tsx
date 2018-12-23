import * as React from 'react';
import { connect } from 'react-redux';

const Summary: React.SFC<any> = props => <div>SUMMARY</div>;

const mapStateToProps = (state: any) => {
  return {
    price: state.checkout.price,
  };
};

export default connect(mapStateToProps)(Summary);
