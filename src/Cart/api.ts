import axios from 'axios';
import { API_URL } from '../config';
import routes from 'src/Common/routes';
import { getToken } from 'src/Auth/selectors';
import { authHeaders } from 'src/Common/api';

export const getCart = (token?: string) => {
  if (!token) {
    return;
  }

  return axios({
    method: 'GET',
    url: `${API_URL}/cart`,
    headers: authHeaders(token),
  });
};

export const removeFromCart = (id: string) => {
  const token = getToken();
  let url = `${API_URL}${routes.removeFromCart}`;
  url = url.replace(':id', id);

  return axios({
    method: 'DELETE',
    url,
    headers: authHeaders(token),
  });
};

export const recalculateCartItem = (id: string, quantity: number) =>
  axios({
    method: 'POST',
    url: `${API_URL}${routes.cartRecalculate}`,
    data: {
      id,
      quantity,
    },
    headers: authHeaders(getToken()),
  });
