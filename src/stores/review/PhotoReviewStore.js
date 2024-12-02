import { create } from 'zustand';

export const usePhotoReview = create((set) => ({
  reviewData: {},
  setReviewData: async ({ id }) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getReviewById(id);
      set({ reviewData: response });
    } catch (e) {
      set({ error: '[ setReviewData ] >> error', isLoading: false });
    }
  },
}));
