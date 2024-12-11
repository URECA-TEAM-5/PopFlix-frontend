import { create } from 'zustand';
import request from '../axios';

const useAuthStore = create((set) => ({
  accessToken: null, // AccessToken
  accessTokenExpireTime: null, // AccessToken 만료 시간

  setAccessToken: (token, expireTime) => {
    set({ accessToken: token, accessTokenExpireTime: expireTime });
    useAuthStore.getState().scheduleTokenRefresh(expireTime); // 만료 전에 갱신 예약
  },

  clearAuth: () => set({ accessToken: null, accessTokenExpireTime: null }),

  scheduleTokenRefresh: (expireTime) => {
    // AccessToken 만료 1분 전 새로운 AccessToken 발급
    const currentTime = Date.now();
    const refreshTime = expireTime - 60 * 1000; // 만료 1분 전

    if (refreshTime > currentTime) {
      const delay = refreshTime - currentTime;
      setTimeout(() => {
        useAuthStore.getState().refreshAccessToken();
      }, delay);
    }
  },

  refreshAccessToken: async () => {
    try {
      const response = await request.post('/auth/refresh'); // RefreshToken으로 갱신 요청
      const newAccessToken = response.data.accessToken; // 새 AccessToken 발급
      const expiresIn = response.data.expiresIn; // 만료 시간 (초 단위)
      const expireTime = Date.now() + expiresIn * 1000;

      useAuthStore.getState().setAccessToken(newAccessToken, expireTime);
    } catch (error) {
      console.error('AccessToken 갱신 실패:', error);
      useAuthStore.getState().clearAuth();
    }
  },
}));

export default useAuthStore;
