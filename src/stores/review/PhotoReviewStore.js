import { create } from 'zustand';
import { apiGetPhtoReview, handleCommentLike } from '../../api/review/photoReview';

export const usePhotoReview = create((set) => ({
  reviewData: '',
  setReviewData: async (id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setReviewData ]`);
      const response = await apiGetPhtoReview(id);
      set({ reviewData: response });
      return response;
    } catch (e) {
      set({ error: '[ setReviewData ] >> error', isLoading: false });
    }
  },

  setIsLiked: (id, state) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setIsLiked ]`);
      handleCommentLike(id, state);
    } catch (e) {
      set({ error: '[ setReviewData ] >> error', isLoading: false });
    }
  },
}));
