import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from '../../helpers/routes';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import { UserState } from '../SignUp/index';

type Props = {
  logged: boolean;
  logoutUser: () => void;
  user: UserState;
};

type StateProps = {
  auth: {
    user: UserState;
    logged: boolean;
  };
};

const TopNavbar: React.SFC<Props> = ({ logged, user, logoutUser }: Props) => {
  return (
    <Row>
      <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
        {!logged ? (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item eventKey={1}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item eventKey={2}>
              <Link to="/cart">Cart</Link>
            </Menu.Item>
            <Menu.Item eventKey={4} style={{ float: 'right' }}>
              <Link to={routes.signup}>Sign up</Link>
            </Menu.Item>
            <Menu.Item eventKey={3} style={{ float: 'right' }}>
              <Link to="/signin">Sign in</Link>
            </Menu.Item>
          </Menu>
        ) : null}
        {logged ? (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item eventKey={1}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item eventKey={2}>
              <Link to="/cart">Cart</Link>
            </Menu.Item>
            <Menu.Item eventKey={3}>
              <Link to="/orders">My orders</Link>
            </Menu.Item>
            <Menu.Item eventKey={5} style={{ float: 'right' }}>
              <Link to="#" onClick={logoutUser}>
                Logout
              </Link>
            </Menu.Item>
            <Menu.Item eventKey={4} style={{ float: 'right' }}>
              Welcome, {user.name}
            </Menu.Item>
          </Menu>
        ) : null}
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ auth: { logged, user } }: StateProps) => ({
  logged,
  user,
});

export default connect(
  mapStateToProps,
  {
    logoutUser: logout,
  },
)(TopNavbar);
