import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../application';

const Loading: React.SFC<Partial<IAppState>> = props => (
  <React.Fragment>
    {props.loading ? <div>Content on page is loading. Please wait.</div> : null}
  </React.Fragment>
);

const mapStateToProps = (state: Partial<IAppState>) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Loading);
