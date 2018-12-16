import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import Dashboard from './components/Dashboard';
import Product from './components/Product/index';
import Navbar from './components/Layout/Navbar';
import Loading from './components/Loading';
import store, { history } from './store/store';
import SignUp from './components/SignUp/index';
import SignIn from './components/SignIn/index';
import routes from './helpers/routes';
import { getToken } from './helpers/auth';
import actionTypes from './actionTypes/auth';

const token = getToken();
if (token) {
  store.dispatch({ type: actionTypes.TOKEN_REQUEST });
}

/**
 * It should be SFC Component. But it is main app component,
 * and only because of that its class component
 */
class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <React.Fragment>
            <Navbar />
            <Loading />
            <Route path="/" exact={true} component={Dashboard} />
            <Route path={routes.signin} exact={true} component={SignIn} />
            <Route path={routes.signup} exact={true} component={SignUp} />
            <Route path="/products" exact={true} component={Product} />
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
