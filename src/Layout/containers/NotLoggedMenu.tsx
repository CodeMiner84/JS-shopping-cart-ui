import * as React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;

type Props = {
  logoutUser: () => void;
  username: string;
};

const NotLoggedMenu: React.FC<Props> = ({ logoutUser, username }: Props) => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
    style={{ lineHeight: '64px' }}
  >
    <MenuItem>
      <Link to="/">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/cart">Cart</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/account">My account</Link>
    </MenuItem>
    <MenuItem style={{ float: 'right' }}>
      <Link to="#" onClick={logoutUser}>
        Logout
      </Link>
    </MenuItem>
    <MenuItem style={{ float: 'right' }}>Welcome, {username}</MenuItem>
  </Menu>
);

export default NotLoggedMenu;
