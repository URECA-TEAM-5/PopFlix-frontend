import { useQuery } from '@tanstack/react-query';
import request from '../axios';
import { sample_data } from '../../components/review/data/photo-review-sample';

export const getReviewById = async (id) => {
  console.log(`[getReviewById]`);
  const { data: photoReviewDetail } = useQuery({
    queryKey: ['photoReviewDetail', id],
    queryFn: async () => sample_data,
    staleTime: 1000 * 60,
  });
  return photoReviewDetail;
};
