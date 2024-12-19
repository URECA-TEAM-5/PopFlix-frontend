import axios from 'axios';

const request = axios.create({
  baseURL: 'https://popflix.org',
  withCredentials: true,
});

let AccessToken = null;

// AccessToken 발급 함수
const refreshAccessToken = async () => {
  try {
    const response = await request.post('/auth/refresh');
    AccessToken = response.data.response.accessToken;
    return AccessToken;
  } catch (error) {
    throw error;
  }
};

// 요청 인터셉터
request.interceptors.request.use(
  (config) => {
    if (AccessToken) {
      config.headers.Authorization = `Bearer ${AccessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        AccessToken = await refreshAccessToken();
        sessionStorage.setItem('accessToken', AccessToken);
        error.config.headers.Authorization = `Bearer ${AccessToken}`;
        //return axios.request(error.config); // 재요청
      } catch (refreshError) {
        window.location.href = '/';
      }
    }
    //return Promise.reject(error); // 다른 에러는 그대로 반환
  }
);

export default request;
