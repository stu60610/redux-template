import axios from 'axios';
import settings from '../config/EnvSettings';


const create = (baseURL = settings.apiBaseURL) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  const getRepos = (userName) => api.get(`users/${userName}/repos`);

  return {
    getRepos
  };
};

export default {
  create
};
