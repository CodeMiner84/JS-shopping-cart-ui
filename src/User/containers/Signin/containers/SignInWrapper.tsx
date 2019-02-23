import * as React from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import { toggleSignin } from '../../../actions';
import { SignIn } from '..';

type Props = {
  toggleSignin: (show: boolean) => void;
  toggleSignIn: boolean;
};

const SignInWrapper: React.FC<Props> = ({
  toggleSignin: onClose,
  toggleSignIn: visible,
}) => (
  <div>
    <Drawer
      width={400}
      title="SignIn"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <SignIn />
    </Drawer>
  </div>
);

type StateProps = {
  auth: {
    toggleSignIn: boolean;
  };
};

const mapStateToProps = ({ auth: { toggleSignIn } }: StateProps) => ({
  toggleSignIn,
});

export default connect(
  mapStateToProps,
  { toggleSignin },
)(SignInWrapper);
