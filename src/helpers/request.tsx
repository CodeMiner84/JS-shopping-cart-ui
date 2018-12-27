import axios from 'axios';
import { API_URL } from '../config';
import { UserProps } from '../components/SignUp/index';
import routes from '../helpers/routes';
import { getToken } from './auth';

const headers = {
  // 'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
};

const authHeaders = (token?: string) => ({
  ...headers,
  Authorization: `Bearer ${token}`,
});

export const getData = (url: string) =>
  axios({
    method: 'get',
    url: `${API_URL}${url}`,
    headers,
  });

export const callRegisterUser = (user: UserProps) =>
  axios({
    method: 'post',
    url: `${API_URL}${routes.register}`,
    data: user,
  });

export const callLoginUser = (url: string, user: UserProps) =>
  axios({
    method: 'post',
    url: `${API_URL}${url}`,
    data: user,
  });

export const me = (token?: string) =>
  axios({
    method: 'post',
    url: `${API_URL}${routes.me}`,
    headers: authHeaders(token),
  });

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

export const addProductToCart = (token: string, customerId: string, product: any) =>
  axios({
    method: 'POST',
    url: `${API_URL}${routes.addToCart}`,
    headers: authHeaders(token),
    data: {
      product_id: product._id,
      customer_id: customerId,
      name: product.title,
      price: product.price,
      quantity: 1,
    },
  });

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

export const createApiOrder = () =>
  axios({
    method: 'POST',
    url: `${API_URL}${routes.placeOrder}`,
    headers: authHeaders(getToken()),
  });
