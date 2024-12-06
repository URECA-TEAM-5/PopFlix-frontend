import { create } from 'zustand';

export const useFavoriteStore = create((set) => ({
    favoriteData: [],
    setFavoriteData: (data) => set({ favoriteData: data }),
}));