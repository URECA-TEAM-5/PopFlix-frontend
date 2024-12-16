import request from '../axios';
import { sample_data } from '../../components/review/data/photo-review-sample';

const GET_PHOTO_REVIEW = '/api/photo-reviews/';

export const apiGetPhtoReview = async (id) => {
  console.log(`[ apiGetPhtoReview ]`);
  try {
    const response = await request.get(GET_PHOTO_REVIEW + id);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`[ apiGetPhtoReview ] >> ${e}`);
  }
  return '';
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
