import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

interface NavbarProps {
  logged: boolean;
  logoutUser: () => void;
}

const Navbar: React.SFC<NavbarProps> = ({ logged, logoutUser }: NavbarProps) => {
  console.log('logged', logged);
  return (
    <Nav bsStyle="pills" className="nav" activeKey={1}>
      {!logged ? (
        <React.Fragment>
          <NavItem eventKey={1} title="Sign in">
            <Link to="/signin" className="nav-link">
              Sign in
            </Link>
          </NavItem>
          <NavItem eventKey={2} title="Sign in">
            <Link to={routes.signup} className="nav-link">
              Sign up
            </Link>
          </NavItem>
        </React.Fragment>
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
          <NavItem eventKey={3} title="Item">
            <Link to="#" className="nav-link" onClick={logoutUser}>
              Logout
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

const mapDispatchToProps = {
  logoutUser: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
