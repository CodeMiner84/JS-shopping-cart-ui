import axios from 'axios';
import routes from 'src/Common/routes';
import { InputPersonalDataModel } from './dtos/input.personal-data.model';
import { InputChangePasswordModel } from './dtos/input-change-password.model';
import { API_URL } from '../../../config';
import { authHeaders } from '../../../Common/api';
import { getToken } from '../../selectors';

export const patchPersonalData = (data: InputPersonalDataModel) =>
  axios({
    method: 'patch',
    url: `${API_URL}${routes.personalData}`,
    data,
    headers: authHeaders(getToken()),
  });

export const patchUserPassword = (data: InputChangePasswordModel) =>
  axios({
    method: 'patch',
    url: `${API_URL}${routes.changePassword}`,
    data,
    headers: authHeaders(getToken()),
  });
