import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Cart } from './Cart/index';
import { Dashboard } from './Dashboard';
import { Navbar } from './Layout';
import { Loading } from './Loading';
import store, { history } from 'src/Common/store/store';
import { SignUp } from 'src/Auth/Signup';
import { SignIn } from 'src/Auth/Signin';
import { UserOrders } from './UserOrders';
import { getToken } from './Auth/selectors';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import 'antd/dist/antd.css';
import './App.css';
import ThankYouPage from './Cart/containers/Thx';
import { TOKEN_REQUEST } from './Auth/actionTypes';

const token = getToken();
if (token) {
  store.dispatch({ type: TOKEN_REQUEST });
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
              <Route path="/orders" exact={true} component={UserOrders} />
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
