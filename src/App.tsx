import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Product from './components/Product/index';
import Cart from './components/Cart';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/product">Product</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>SIDEBAR</div>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/product" exact={true} component={Product} />
            <Route path="/cart" exact={true} component={Cart} />
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
