import { create } from 'zustand';
import { getMyWatchList } from '../../api/mypage/myWatchList';

export const useMyWatchList = create((set) => ({
  myWatchList: [],
  setMyWatchList: () => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setMyWatchList ]`);
      const response = getMyWatchList();
      set({ myWatchList: response });
      return response;
    } catch (e) {
      set({ error: '[ setMyWatchList ] >> error', isLoading: false });
    }
  },

  setIsPublic: (id, state) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setIsPublic ]`);
      handleChangePublic(id, state);
    } catch (e) {
      set({ error: '[ setMyWatchList ] >> error', isLoading: false });
    }
  },
}));