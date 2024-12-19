import request from '../axios';
import { chkUserInfo } from '../../components/userInfo/modal/chkUserInfo';

const GET_PHOTO_REVIEW = '/api/photo-reviews';
const GET_HOT_PHOTO_REVIEW = '/api/photo-review-comments/review';
const ADD_COMMENT = '/api/photo-review-comments';
const HANDLE_COMMENT_LIKE = '/api/photo-review-comments';
const userId = await chkUserInfo().userId;

export const apiGetPhtoReview = async (id) => {
  console.log(`[ apiGetPhtoReview ]`);
  try {
    const response = await request.get(GET_PHOTO_REVIEW + `/${id}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`[ apiGetPhtoReview ] >> ${e}`);
    window.location.href = `/error`;
  }
};

export const apiGetHotCommnetList = async (id) => {
  console.log(`[ apiGetHotCommnetList ]`);
  try {
    const response = await request.get(GET_HOT_PHOTO_REVIEW + `/${id}/likes`);
    return response.data;
  } catch (e) {
    console.log(`[ apiGetPhtoReview ] >> ${e}`);
    window.location.href = `/error`;
  }
};

export const handleCommentLike = async (id, state) => {
  console.log(`[ handleCommentLike ]`);
  console.log(`** userId >> ${userId}`);
  const API_PATH = HANDLE_COMMENT_LIKE + `/${id}/like?userId=${userId}`;
  try {
    const response = state ? await request.post(API_PATH) : await request.delete(API_PATH);
    if (response.status === 200) {
      console.log(`[${id}]번 댓글에 ${state ? '좋아요' : '좋아요 해제'}가 등록되었습니다!`);
      console.log(response);
    }
  } catch (e) {
    console.log(`[ handleCommentLike ] >> ${e}`);
    window.location.href = `/error`;
  }
};

export const apiPostAddComment = async (data) => {
  console.log(`[ apiPostAddComment ]`);
  console.log(data);
  try {
    const response = await request.post(ADD_COMMENT, data);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(`[ apiPostAddComment ] >> ${e}`);
    window.location.href = `/error`;
  }
};
