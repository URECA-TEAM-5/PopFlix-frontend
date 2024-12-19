import { create } from 'zustand';
import { apiGetHotCommnetList, apiGetPhtoReview, apiPostAddComment, handleCommentLike } from '../../api/review/photoReview';

export const usePhotoReview = create((set) => ({
  reviewData: '',
  comments: '',
  setReviewData: async (id, state) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setReviewData ] >> sort: ${state}`);
      if (state === 'latest') {
        const response = await apiGetPhtoReview(id);
        set({ reviewData: response, comments: response.comments });
        return response;
      } else if (state === 'hot') {
        const response = await apiGetHotCommnetList(id);
        console.log(response);
        set({ comments: response });
        console.log(comments);
      }
    } catch (e) {
      set({ error: '[ setReviewData ] >> error', isLoading: false });
    }
  },

  setIsLiked: async (id, state) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setIsLiked ]`);
      const status = await handleCommentLike(id, state);
      console.log(`[status >> ${status}] [${id}]번 댓글에 ${state ? '좋아요' : '좋아요 해제'}가 등록되었습니다!`);
      return status;
    } catch (e) {
      set({ error: '[ setReviewData ] >> error', isLoading: false });
    }
  },

  addComment: async (data) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ addComment ]`);
      await apiPostAddComment(data);
    } catch (e) {
      set({ error: '[ addComment ] >> error', isLoading: false });
    }
  },
}));
