import request from '../axios';
import { sample_data } from '../../components/review/data/photo-review-sample';

export const getReviewById = (id) => {
  console.log(`[ getReviewById ]`);
  return sample_data.find((item) => item.reviewId === id);
};

export const handleCommentLike = (id, state) => {
  sample_data[0].comments.map((item) => {
    if (item.commentId === id) {
      console.log(`[ commentId ] >> ${item.commentId}`);
      item.isLiked = state;
      console.log(`[${item.commentId}]번 댓글에 ${state ? '좋아요' : '좋아요 해제'}가 등록되었습니다!`);
    }
  });
};
