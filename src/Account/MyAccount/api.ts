import axios from 'axios';
import routes from 'src/Common/routes';
import { InputPersonalDataModel } from './dtos/input.personal-data.model';
import { API_URL } from '../../config';
import { authHeaders } from '../../Common/api';
import { getToken } from '../../Auth/selectors';

export const patchPersonalData = (data: InputPersonalDataModel) =>
  axios({
    method: 'patch',
    url: `${API_URL}${routes.personalData}`,
    data,
    headers: authHeaders(getToken()),
  });
