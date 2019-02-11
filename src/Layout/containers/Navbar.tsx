import * as React from 'react';
import { connect } from 'react-redux';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { UserState } from 'src/User/containers/Signup';
import { logout } from '../../User/actions';
import 'antd/dist/antd.css';

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

const Navbar: React.SFC<Props> = ({ logged, user, logoutUser }: Props) => {
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
              <Link to="/signup">Sign up</Link>
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
              <Link to="/account">My account</Link>
            </Menu.Item>
            <Menu.Item eventKey={5} style={{ float: 'right' }}>
              <Link to="#" onClick={logoutUser}>
                Logout
              </Link>
            </Menu.Item>
            <Menu.Item eventKey={4} style={{ float: 'right' }}>
              Welcome, {user.username}
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
)(Navbar);
