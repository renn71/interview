import axios from 'axios';
import { roversAdapter } from '../helper/adapters';
import { TDataApi } from '../types/models';

const api = (data: TDataApi) => {
  const apiUrl = 'http://localhost:3004/api/rovers';

  return axios
    .post(apiUrl, data)
    .then((response) => {
      console.info(roversAdapter(response.data));
      return roversAdapter(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
export default api;
