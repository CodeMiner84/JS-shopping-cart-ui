import axios from 'axios';
import { API_URL } from '../config';
import { UserProps } from '../components/SignUp/index';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
};

export const getData = (url: string) =>
  axios({
    method: 'get',
    url: `${API_URL}${url}`,
    headers,
  });

export const callRegisterUser = (url: string, user: UserProps) =>
  axios({
    method: 'post',
    url: `${API_URL}${url}`,
    data: user,
  });
