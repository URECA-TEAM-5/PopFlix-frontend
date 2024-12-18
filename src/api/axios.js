import axios from 'axios';

const request = axios.create({
  baseURL: 'https://popflix.org',
  withCredentials: true, // 쿠키 포함 설정
});

let AccessToken = null; // 메모리상에 AccessToken을 저장

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
    console.log('현재 AccessToken:', AccessToken); // AccessToken이 null인지 확인
    if (AccessToken) {
      config.headers.Authorization = `Bearer ${AccessToken}`; // AccessToken이 있으면 헤더에 추가
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
request.interceptors.response.use(
  (response) => response, // 성공 응답 그대로 반환
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.warn('401 Unauthorized. AccessToken 재발급 시도 중...');
      try {
        // AccessToken 재발급 시도
        AccessToken = await refreshAccessToken();
        console.log('AccessToken:', AccessToken);
        sessionStorage.setItem('accessToken', AccessToken);
        error.config.headers.Authorization = `Bearer ${AccessToken}`;
        //return axios.request(error.config); // 재요청
      } catch (refreshError) {
        console.error('AccessToken 재발급 실패. 로그아웃 필요.');
        // 로그아웃 처리 또는 메인 페이지로 리다이렉션
        window.location.href = '/';
      }
    }
    //return Promise.reject(error); // 다른 에러는 그대로 반환
  }
);

export default request;
