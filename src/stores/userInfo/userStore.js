import { create } from 'zustand';
import { getUserInfo } from '../../api/auth/auth';

export const useUserInfo = create((set) => ({
  userInfo: '',
  setUserInfo: () => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setUserInfo ]`);
      const response = getUserInfo();
      set({ userInfo: response });
      console.log(userInfo);
    } catch (e) {
      set({ error: '[ setUserInfo ] >> error', isLoading: false });
    }
  },
}));
