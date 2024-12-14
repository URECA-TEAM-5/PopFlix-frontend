import axios from 'axios';

const request = axios.create({
  baseURL: 'https://popflix.org',
  withCredentials: true, // 쿠키 포함 설정
});

// AccessToken을 쿠키에서 읽는 함수
const getAccessTokenFromCookie = () => {
  const cookies = document.cookie.split('; ');
  const accessTokenCookie = cookies.find((cookie) => cookie.startsWith('access_token='));
  return accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
};

// 요청 인터셉터: 매 요청마다 최신 AccessToken 읽기
request.interceptors.request.use(
  (config) => {
    const accessToken = getAccessTokenFromCookie(); // 쿠키에서 AccessToken 읽기
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 에러 처리 및 AccessToken 갱신
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // AccessToken 갱신 요청 (RefreshToken 사용)
        await axios.post('https://popflix.org/auth/refresh', {}, { withCredentials: true });

        // 새로 발급받은 AccessToken 쿠키에서 읽기
        const newAccessToken = getAccessTokenFromCookie();

        // 실패했던 요청에 새로운 AccessToken 추가
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;

        // 실패했던 요청 재시도
        return request(error.config);
      } catch (refreshError) {
        console.error('AccessToken 갱신 실패:', refreshError);

        // 갱신 실패 시 로그아웃 처리
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// AccessToken 초기화 함수
export const initializeAccessToken = async () => {
  try {
    // RefreshToken으로 AccessToken 갱신
    await axios.post('https://popflix.org/auth/refresh', {}, { withCredentials: true });
    console.log('AccessToken 초기화 완료');
  } catch (error) {
    console.error('AccessToken 초기화 실패:', error);
    window.location.href = '/login'; // 로그인 페이지로 이동
  }
};

export default request;
