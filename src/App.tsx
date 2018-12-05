import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Product from './components/Product/index';
import Cart from './components/Cart';
import { Navbar } from './components/Layout/Navbar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar />
            <div>SIDEBAR</div>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/products" exact={true} component={Product} />
          </React.Fragment>
        </Router>
        {/* ROUTER */}
        {/* LINK: / */}
        {/* LINK: product/:id */}
        {/* LINK: cart */}
      </div>
    );
  }
}

export default App;
