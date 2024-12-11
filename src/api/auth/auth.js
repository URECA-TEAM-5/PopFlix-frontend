import request from '../axios';
import useAuthStore from './authStore';

export const login = async (credentials) => {
  try {
    const response = await request.post('/auth/login', credentials);
    const { accessToken, expiresIn } = response.data;
    const expireTime = Date.now() + expiresIn * 1000;

    useAuthStore.getState().setAccessToken(accessToken, expireTime); // Zustand에 AccessToken 저장
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await request.post('/auth/logout');
    useAuthStore.getState().clearAuth(); // Zustand 상태 초기화
  } catch (error) {
    console.error('로그아웃 실패:', error);
    throw error;
  }
};
