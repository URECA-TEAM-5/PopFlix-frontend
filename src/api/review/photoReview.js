import request from '../axios';
import { sample_data } from '../../components/review/data/photo-review-sample';

export const getReviewById = (id) => {
  console.log(`[getReviewById]`);
  return sample_data.find((item) => item.reviewId === id);
};
