import { API_URL } from 'src/config';
import axios from 'axios';
import { getToken } from '../User/selectors';

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

api.interceptors.request.use(
  (config: any) => {
    if (getToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const getRequest = async (endpoint: string) => await api.get(endpoint);

export const postRequest = async (endpoint: string, params: any) =>
  await api.post(endpoint, params);

export const patchRequest = async (endpoint: string, params: any) =>
  await api.patch(endpoint, params);

export const deleteRequest = async (endpoint: string) => await api.delete(endpoint);
