import { create } from 'zustand';
import { fetchDetailData, fetchOtherStorage, handleOtherStorageLike, handleStorageLike } from '../../api/watchlist/watchlist';

export const useWatchList = create((set) => ({
    watchListDetail: null,
    otherStorage: null,
    setwatchListDetail: async (id) => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await fetchDetailData({ queryKey: ['detailData', id] });
            if(response) {
                set({ watchListDetail: response });
                return response;
            }
        } catch (e) {
            set({ error: `[setwatchListDetail] >> error: ${e}`, isLoading: false });
        }
    },
    setOtherStorage: async () => {
        set({ isLoading: true, error: null, message: null });
        try {
            const response = await fetchOtherStorage();
            if (response) {
                set({ otherStorage: response });
                return response;
            }
        } catch (e) {
            set({ error: `[setOtherData] >> error: ${e}`, isLoading: false });
        }
    },
    setIsLiked: async (id, state) => {
        set({ isLoading: true, error: null, message: null });
        try {
            console.log(`[ setIsLiked ]`);
            if (state === 'detail') {
                if (watchListDetail) {
                    handleStorageLike(id, state);
                    set({ watchListDetail: [...watchListDetail] });
                }
            }
            if (state === 'other') {
                if (otherStorage) {
                    handleOtherStorageLike(id, state);
                    set({ otherStorage: [...otherStorage] });
                }
            }
        } catch (e) {
            set({ error: '[setIsLiked] >> error: ' + e, isLoading: false });
        }
    },
}));