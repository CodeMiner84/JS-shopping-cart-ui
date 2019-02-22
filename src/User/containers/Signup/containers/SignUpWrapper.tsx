import * as React from 'react';
import { Drawer, Button } from 'antd';
import { connect } from 'react-redux';
import { toggleSignup } from '../../../actions';
import { SignUp } from '..';

type Props = {
  toggleSignup: (show: boolean) => void;
  toggleSignUp: boolean;
};

const SingUpwrapper: React.FC<Props> = ({
  toggleSignup: onClose,
  toggleSignUp: visible,
}) => (
  <div>
    <Drawer
      width={400}
      title="Sign Up"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <SignUp />
    </Drawer>
  </div>
);

const mapStateToProps = ({ auth: { toggleSignUp } }: any) => ({
  toggleSignUp,
});

export default connect(
  mapStateToProps,
  { toggleSignup },
)(SingUpwrapper);
