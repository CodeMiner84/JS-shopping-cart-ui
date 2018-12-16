import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, Navbar, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

interface NavbarProps {
  logged: boolean;
  logoutUser: () => void;
}

const TopNavbar: React.SFC<NavbarProps> = ({ logged, logoutUser }: NavbarProps) => {
  console.log('logged', logged);
  return (
    <div>
      <Navbar color="light" light={true} expand="md">
        <Collapse navbar={true}>
          <Nav className="ml-auto" navbar={true}>
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
                  <Link to="/cart" className="nav-link">
                    Cart
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
        </Collapse>
      </Navbar>
    </div>
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
)(TopNavbar);
