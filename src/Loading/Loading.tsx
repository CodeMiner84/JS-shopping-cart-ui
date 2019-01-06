import * as React from 'react';
import { connect } from 'react-redux';

type Props = typeof initialState;
type State = typeof initialState;

const initialState = { loading: false };

const Loading: React.SFC<Props> = props => (
  <React.Fragment>
    {props.loading ? <div>Content on page is loading. Please wait.</div> : null}
  </React.Fragment>
);

const mapStateToProps = (state: State) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Loading);
