import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import Cart from './components/Cart/index';
import Dashboard from './components/Dashboard';
import Navbar from './components/Layout/Navbar';
import Loading from './components/Loading';
import store, { history } from './store/store';
import SignUp from './components/SignUp/index';
import SignIn from './components/SignIn/index';
import Orders from './components/Orders/index';
import { getToken } from './helpers/auth';
import actionTypes from './actionTypes/auth';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import * as moment from 'moment';
import 'antd/dist/antd.css';
import './App.css';
import ThankYouPage from './components/Cart/Thx';

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
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <Navbar />
            </Header>
            <Content style={{ padding: '75px 50px 0' }}>
              <Loading />
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/signin" exact={true} component={SignIn} />
              <Route path="/signup" exact={true} component={SignUp} />
              <Route path="/orders" exact={true} component={Orders} />
              <Route path="/cart" exact={true} component={Cart} />
              <Route path="/thx" exact={true} component={ThankYouPage} />
            </Content>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
