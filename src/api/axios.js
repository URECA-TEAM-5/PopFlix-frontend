import axios from 'axios';
import serverBaseUrl from '../config/serverConfig';
import useAuthStore from './auth/authStore';

const request = axios.create({
  baseURL: serverBaseUrl,
  withCredentials: true,
});

request.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // AccessToken 갱신 요청
        await useAuthStore.getState().refreshAccessToken();
        return request(error.config); // 갱신 후 요청 재시도
      } catch (refreshError) {
        console.error('AccessToken 갱신 실패:', refreshError);
        useAuthStore.getState().clearAuth();
        window.location.href = '/login'; // 로그인 페이지로 이동
      }
    }
    return Promise.reject(error);
  }
);

export default request;
