import React from 'react';
import { PhotoReviewContainer } from '../../../components/review/photo/style/PhotoReviewStyle';
import ReviewHeader from '../../../components/review/photo/ReviewHeader';
import ReviewImage from '../../../components/review/photo/ReviewImage';
import ReviewBody from '../../../components/review/photo/ReviewBody';
import CommentList from '../../../components/review/comments/CommentList';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';
import { useQuery } from '@tanstack/react-query';

const PhotoReviewDetail = () => {
  const { reviewData, setReviewData } = usePhotoReview();

  const { data } = useQuery({
    queryKey: ['photoReviewDetail'],
    queryFn: async () => {
      return await setReviewData(1);
    },
    staleTime: 1000 * 10,
  });

  return (
    <>
      {reviewData && (
        <PhotoReviewContainer className="photo-review-container">
          <ReviewHeader title={'리뷰'} subTitle={reviewData.user.nickname} />
          <ReviewImage />
          <ReviewBody />
          <CommentList />
        </PhotoReviewContainer>
      )}
    </>
  );
};

export default PhotoReviewDetail;
