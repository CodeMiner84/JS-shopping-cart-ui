import axios from 'axios';
import { API_URL } from 'src/config';
import routes from 'src/Common/routes';
import { getToken } from 'src/Auth/selectors';
import { authHeaders } from 'src/Common/api';

export const getApiOrders = () =>
  axios({
    method: 'GET',
    url: `${API_URL}${routes.ordersList}`,
    headers: authHeaders(getToken()),
  });
