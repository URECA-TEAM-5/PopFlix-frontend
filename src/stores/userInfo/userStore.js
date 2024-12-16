import { create } from 'zustand';
import { apiGetUserInfo, apiPostSignup } from '../../api/auth/auth';

export const useUserInfo = create((set) => ({
  userInfo: '',
  setUserInfo: () => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setUserInfo ]`);
      const response = apiGetUserInfo();
      set({ userInfo: response });
    } catch (e) {
      set({ error: '[ setUserInfo ] >> error', isLoading: false });
    }
  },

  signup: (info) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ signup ]`);
      apiPostSignup(info);
    } catch (e) {
      set({ error: '[ signup ] >> error', isLoading: false });
    }
  },
}));
