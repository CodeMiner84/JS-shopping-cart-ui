import * as React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.SFC<{}> = () => (
  <>
    <h5>Thank You page</h5>

    <div>
      Your order is placed. You can view it on your orders list page{' '}
      <Link to="/orders">here</Link>.
    </div>
  </>
);

export default ThankYouPage;
