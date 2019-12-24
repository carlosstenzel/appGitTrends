import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'https://api.github.com/',
});

export default apiAxios;
