import Axios from 'axios';
import { API_URL } from 'src/config';

export const headers = {
  // 'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
};

export const authHeaders = (token?: string) => ({
  ...headers,
  Authorization: `Bearer ${token}`,
});

export const getData = async (url: string) =>
  await Axios({
    method: 'get',
    url: `${API_URL}${url}`,
    headers,
  });
