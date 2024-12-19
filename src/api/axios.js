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
    console.log('새로운 AccessToken 발급 성공:', AccessToken);
    return AccessToken;
  } catch (error) {
    console.error('AccessToken 발급 실패:', error);
    throw error;
  }
};

// 요청 인터셉터
request.interceptors.request.use(
  (config) => {
    console.log('현재 AccessToken:', AccessToken);
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
      console.warn('401 Unauthorized. AccessToken 재발급 시도 중...');
      try {
        AccessToken = await refreshAccessToken();
        console.log('AccessToken:', AccessToken);
        sessionStorage.setItem('accessToken', AccessToken);
        error.config.headers.Authorization = `Bearer ${AccessToken}`;
        //return axios.request(error.config); // 재요청
      } catch (refreshError) {
        console.error('AccessToken 재발급 실패. 로그아웃 필요.');

        window.location.href = '/';
      }
    }
    //return Promise.reject(error); // 다른 에러는 그대로 반환
  }
);

export default request;
