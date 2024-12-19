import { create } from 'zustand';
import { getOtherStorage, getWatchlistDetail, postDetailStorageLike } from '../../api/watchlistDetail/watchlistDetail';

export const useWatchListDetail = create((set) => ({
    watchListDetail: [],
    otherStorage: [],
    setWatchListDetail: async (storageId, userId) => {
        set({ isLoading: true, error: null, message: null });
        try {
            console.log(`[ setWatchListDetail ]`);
            const response = await getWatchlistDetail(storageId, userId);
            set({ watchListDetail: response, isLoading: false});
        } catch (e) {
            set({ error: '[ setWatchListDetail ] >> error', isLoading: false});
        }
    },
    setOtherStorage: async (storageId, userId) => {
        set({ isLoading: true, error: null, message: null });
        try {
            console.log(`[ setOtherStorage ]`);
            const response = await getOtherStorage(storageId, userId);
            set({ otherStorage: response, isLoading: false});
        } catch (e) {
            set({ error: '[ setOtherStorage ] >> error', isLoading: false});
        }
    },
    setIsLiked: async (storageId, userId) => {
        set({ isLoading: true, error: null, message: null });
        try {
            console.log(`[ setIsLiked ]`);
            const response = await postDetailStorageLike(storageId, userId);
            set({ isLoading: false });
            return response.status;
        } catch (e) {
            set({ error: '[ setIsLiked ] >> error', isLoading: false });
        }
    }
}));