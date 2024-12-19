import { create } from 'zustand';
import { getMyFavoriteWatchList, postStorageLike } from '../../api/mypage/myFavoriteWatchList';

export const useMyFavoriteWatchList = create((set) => ({
    myFavoriteWatchList: [],
    setMyFavoriteWatchList: async (userId) => {
        set({ isLoading: true, error: null, message: null });
        try {
            console.log(`[ setMyFavoriteWatchList ]`);
            const response = await getMyFavoriteWatchList(userId);
            set({ myFavoriteWatchList: response.response, isLoading: false});
        } catch (e) {
            set({ error: '[ setMyFavoriteWatchList ] >> error', isLoading: false});
        }
    },

    setStorageLike: async (storageId, userId) => {
        set({ isLoading: true, error: null, message: null });
        try {
            console.log(`[ setStorageLike ]`);
            const postResponse = await postStorageLike(storageId, userId);
            set({ isLoading: false });
            return postResponse.status;
        } catch (e) {
            set({ error: '[ setStorageLike ] >> error', isLoading: false });
        }
    }
}));