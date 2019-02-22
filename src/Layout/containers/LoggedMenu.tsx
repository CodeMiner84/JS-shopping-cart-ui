import * as React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ClickParam } from 'antd/lib/menu';

const MenuItem = Menu.Item;

type Props = {
  showSingUp: (param: ClickParam) => void;
  showSignIn: (param: ClickParam) => void;
};

const LoggedMenu: React.SFC<Props> = ({ showSingUp, showSignIn }: Props) => (
  <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
    <MenuItem>
      <Link to="/">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/cart">Cart</Link>
    </MenuItem>
    <MenuItem onClick={showSingUp} style={{ float: 'right' }}>
      Sign up
    </MenuItem>
    <MenuItem onClick={showSignIn} style={{ float: 'right' }}>
      Sign in
    </MenuItem>
  </Menu>
);

export default LoggedMenu;
