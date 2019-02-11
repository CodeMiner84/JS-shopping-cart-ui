import axios from 'axios';
import { API_URL } from '../config';
import routes from 'src/Common/routes';
import { getToken } from 'src/User/selectors';
import { authHeaders } from 'src/Common/api';

export const getApiOrders = () =>
  axios({
    method: 'GET',
    url: `${API_URL}${routes.ordersList}`,
    headers: authHeaders(getToken()),
  });

export const createApiOrder = () =>
  axios({
    method: 'POST',
    url: `${API_URL}${routes.placeOrder}`,
    headers: authHeaders(getToken()),
  });
