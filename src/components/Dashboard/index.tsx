import * as React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component<{}, {}> {
  render() {
    console.log('this.props', this.props);
    return <div>Cart Page</div>;
  }
}

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(Dashboard);
