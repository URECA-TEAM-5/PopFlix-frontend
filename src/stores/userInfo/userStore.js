import { create } from 'zustand';
import { apiGetUserInfo, apiPostSignup, apiUpdateUserInfo } from '../../api/auth/auth';

export const useUserInfo = create((set) => ({
  userInfo: '',
  setUserInfo: async () => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setUserInfo ]`);
      const response = await apiGetUserInfo();
      set({ userInfo: response });
    } catch (e) {
      set({ error: '[ setUserInfo ] >> error', isLoading: false });
    }
  },

  updateUserInfo: async (formData) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ updateUserInfo ]`);
      const response = await apiUpdateUserInfo(formData);
      set({ userInfo: response });
    } catch (e) {
      set({ error: '[ updateUserInfo ] >> error', isLoading: false });
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
