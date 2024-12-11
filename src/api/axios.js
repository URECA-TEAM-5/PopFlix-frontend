import axios from 'axios';

const request = axios.create({
  baseURL: 'https://popflix.org',
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default request;
