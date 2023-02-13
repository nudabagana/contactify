import Axios from 'axios';
import { configure } from 'axios-hooks';
import { API_URL } from '../consts';

export const initAxios = () => {
  const axios = Axios.create({
    baseURL: API_URL,
    headers: { 'content-type': 'application/json' },
    timeout: 10 * 1000,
  });

  configure({ axios });
};
