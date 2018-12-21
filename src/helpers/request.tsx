import axios from 'axios';
import { API_URL } from '../config';
import { UserProps } from '../components/SignUp/index';
import routes from '../helpers/routes';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
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
    data: `token=${token}`,
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
