import { create } from 'zustand';
import { getMyWatchList, patchSwitchPublic } from '../../api/mypage/myWatchList';

export const useMyWatchList = create((set) => ({
  myWatchList: [],
  setMyWatchList: async (userId) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setMyWatchlist ]`);
      const response = await getMyWatchList(userId);
      set({ myWatchList: response.response, isLoading: false});
    } catch (e) {
      set({ error: '[ setMyWatchlist] >> error', isLoading: false});
    }
  },

  setIsPublic: async (storageId, userId) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setIsPublic ]`);
      const switchResponse = await patchSwitchPublic(storageId, userId);
      set({ isLoading: false });
      return switchResponse.status;
    } catch (e) {
      set({ error: '[ setIsPublic ] >> error', isLoading: false });
    }
  }
}));