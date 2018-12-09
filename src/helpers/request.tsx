import axios from 'axios';
import { API_URL } from '../config';

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
