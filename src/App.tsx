import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Product from './components/Product/index';
import { Navbar } from './components/Layout/Navbar';
import Loading from './components/Loading';

/**
 * It should be SFC Component. But it is main app component,
 * and only because of that its class component
 */
class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar />
            <Loading />
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/products" exact={true} component={Product} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
