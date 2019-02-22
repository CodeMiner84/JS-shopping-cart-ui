import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { UserState } from '../../User/containers/Signup';
import { logout, toggleSignin, toggleSignup } from '../../User/actions';
import 'antd/dist/antd.css';
import LoggedMenu from './LoggedMenu';
import NotLoggedMenu from './NotLoggedMenu';
import { ClickParam } from 'antd/lib/menu';

type Props = {
  logged: boolean;
  logoutUser: () => void;
  user: UserState;
  toggleSignin: (param: ClickParam) => void;
  toggleSignup: (param: ClickParam) => void;
};

type StateProps = {
  auth: {
    user: UserState;
    logged: boolean;
  };
};

const Navbar: React.FC<Props> = ({
  logged,
  user,
  logoutUser,
  toggleSignin: showSignIn,
  toggleSignup: showSingUp,
}: Props) => {
  return (
    <Row>
      <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
        {!logged ? <LoggedMenu showSignIn={showSignIn} showSingUp={showSingUp} /> : null}
        {logged ? (
          <NotLoggedMenu logoutUser={logoutUser} username={user.username} />
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
    toggleSignin,
    toggleSignup,
  },
)(Navbar);
