import * as React from 'react';
import { Switch, Route } from 'react-router';
import { AccountLayout } from './Layout';
import { MyOrders } from './MyOrders/index';
import { MyAccount } from './MyAccount/index';

export class AccountLayoutSwitch extends React.Component<{}, {}> {
  render() {
    return (
      <AccountLayout>
        <Switch>
          <Route path="/account" exact={true} component={MyAccount} />
          <Route path="/account/my-orders" exact={true} component={MyOrders} />
        </Switch>
      </AccountLayout>
    );
  }
}
