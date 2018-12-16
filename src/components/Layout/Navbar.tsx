import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import { connect } from 'react-redux';

interface NavbarProps {
  logged: boolean;
}

const Navbar: React.SFC<NavbarProps> = ({ logged }: NavbarProps) => {
  console.log('logged', logged);
  return (
    <Nav bsStyle="pills" className="nav" activeKey={1}>
      {!logged ? (
        <NavItem eventKey={3} title="Sign in">
          <Link to="/signin" className="nav-link">
            Sign in
          </Link>
        </NavItem>
      ) : null}
      {logged ? (
        <React.Fragment>
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
            <Link to={routes.signup} className="nav-link">
              Sign up
            </Link>
          </NavItem>
        </React.Fragment>
      ) : null}
    </Nav>
  );
};

interface AuthLogged {
  auth: {
    logged: boolean;
  };
}

const mapStateToProps = ({ auth: { logged } }: AuthLogged) => ({
  logged,
});

export default connect(
  mapStateToProps,
  null,
)(Navbar);
