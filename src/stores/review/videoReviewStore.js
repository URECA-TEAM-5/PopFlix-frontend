import { create } from "zustand";
import { persist,createJSONStorage } from 'zustand/middleware';
export const useVideoReviewStore = create(
    persist(
    (set) => ({
    youtubeVideos: [], 
    isLoading: false,
    setYoutubeVideos: (videos) => set({youtubeVideos: videos, isLoading: false }),
    setLoading: (loading) => set({  isLoading: loading }),
    }),
    {
        name: 'video-storage', 
        storage: createJSONStorage(() => sessionStorage), 
    
   }
)
);

