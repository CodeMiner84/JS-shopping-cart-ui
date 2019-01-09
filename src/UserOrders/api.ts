import axios from 'axios';
import { API_URL } from '../config';
import routes from '../Common/routes';
import { getToken } from '../Auth/selectors';
import { authHeaders } from '../Common/api';

export const getApiOrders = () =>
  axios({
    method: 'GET',
    url: `${API_URL}${routes.ordersList}`,
    headers: authHeaders(getToken()),
  });
