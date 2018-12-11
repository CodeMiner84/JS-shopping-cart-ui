import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../application';

const Loading: React.SFC<Partial<AppState>> = props => (
  <React.Fragment>
    {props.loading ? <div>Content on page is loading. Please wait.</div> : null}
  </React.Fragment>
);

const mapStateToProps = (state: Partial<AppState>) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Loading);
