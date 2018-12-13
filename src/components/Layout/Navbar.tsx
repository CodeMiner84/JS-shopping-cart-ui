import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Navbar: React.SFC<{}> = () => (
  <Nav bsStyle="pills" className="nav" activeKey={1}>
    <NavItem eventKey={1} href="/home">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </NavItem>
    <NavItem eventKey={2} title="Item">
      <Link to="/products" className="nav-link">
        Product
      </Link>
    </NavItem>
    <NavItem eventKey={3} title="Sign in">
      <Link to="/signup" className="nav-link">
        Sign up
      </Link>
    </NavItem>
  </Nav>
);
