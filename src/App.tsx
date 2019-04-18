import * as React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import ReactGA from 'react-ga';
import { Router, Route, Switch } from 'react-router';
import { Cart } from './Cart/index';
import { Dashboard } from './Dashboard';
import { Navbar } from './Layout';
import store, { history } from './Common/store/store';
import { getToken } from './User/selectors';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import ThankYouPage from './Checkout/containers/Thx';
import { TOKEN_REQUEST } from './User/actionTypes';
import { AccountLayoutSwitch } from './User/containers/AccountLayoutSwitch';
import SignInWrapper from './User/containers/Signin/containers/SignInWrapper';
import SignUpWrapper from './User/containers/Signup/containers/SignUpWrapper';

const token = getToken();
if (token) {
  store.dispatch({ type: TOKEN_REQUEST });
}

type Props = {
  loading?: boolean;
};

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    ReactGA.initialize('UA-138635270-1');
    ReactGA.pageview(window.location.pathname);
  }
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <React.Fragment>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <Navbar />
            </Header>
            <Content style={{ padding: '75px 50px 0' }}>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/cart" exact={true} component={Cart} />
              <Route path="/thx" exact={true} component={ThankYouPage} />
              <Route path="/account" component={AccountLayoutSwitch} />
            </Content>
            <SignInWrapper />
            <SignUpWrapper />
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
