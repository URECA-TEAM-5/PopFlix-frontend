import { create } from 'zustand';
import { getReviewById } from '../../api/review/photoReview';
import { sample_data } from '../../components/review/data/photo-review-sample';

export const usePhotoReview = create((set) => ({
  reviewData: '',
  setReviewData: (id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[setReviewData]`);
      const response = getReviewById(id);
      set({ reviewData: response });
      return response;
    } catch (e) {
      set({ error: '[ setReviewData ] >> error', isLoading: false });
    }
  },
}));
