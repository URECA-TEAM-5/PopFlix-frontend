import axios from 'axios';

const request = axios.create({
  baseURL: 'https://popflix.org',
  withCredentials: true,
});

let accessToken = null;

// 요청 인터셉터: AccessToken 추가
request.interceptors.request.use(
  (config) => {
    return config; // 쿠키에있는 토큰 넘김
  },

  // (config) => {
  //   if (accessToken) {
  //     config.headers.Authorization = `Bearer ${accessToken}`;
  //   }
  //   return config;
  // },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: AccessToken 갱신 처리
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // AccessToken 재발급 요청 (RefreshToken 사용)
        await axios.post('https://popflix.org/auth/refresh', {}, { withCredentials: true });

        // 원래 실패했던 요청 재시도
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

// request.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       try {
//         const refreshResponse = await axios.post('https://popflix.org/auth/refresh', {}, { withCredentials: true });

//         accessToken = refreshResponse.data.accessToken;

//         error.config.headers.Authorization = `Bearer ${accessToken}`;
//         return request(error.config);
//       } catch (refreshError) {
//         console.error('AccessToken 갱신 실패:', refreshError);

//         accessToken = null;
//         window.location.href = '/';
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// AccessToken 초기화 함수 (나중에 최상위 컴포넌트에서 페이지 로드될떄마다 호출하기~)
// const initializeAccessToken = async () => {
//   try {
//     const refreshResponse = await axios.post('https://popflix.org/auth/refresh', {}, { withCredentials: true });
//     accessToken = refreshResponse.data.accessToken;
//     console.log('AccessToken 초기화 완료:', accessToken);
//   } catch (error) {
//     console.error('AccessToken 초기화 실패:', error);
//     accessToken = null;
//     window.location.href = '/';
//   }
// };

export default request;
