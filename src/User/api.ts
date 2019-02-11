import axios from 'axios';
import { API_URL } from '../config';
import routes from 'src/Common/routes';
import { authHeaders } from 'src/Common/api';
import { UserState } from 'src/User/containers/Signup';

export const me = (token?: string) =>
  axios({
    method: 'get',
    url: `${API_URL}${routes.me}`,
    headers: authHeaders(token),
  });

export const callRegisterUser = (user: UserState) =>
  axios({
    method: 'post',
    url: `${API_URL}${routes.signup}`,
    data: user,
  });

export const callLoginUser = (user: UserState) =>
  axios({
    method: 'post',
    url: `${API_URL}${routes.signin}`,
    data: user,
  });
