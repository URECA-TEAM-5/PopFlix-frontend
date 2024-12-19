import React, { Suspense, useEffect, useRef } from 'react';
import { PhotoReviewContainer } from '../../../components/review/photo/style/PhotoReviewStyle';
import ReviewHeader from '../../../components/review/photo/ReviewHeader';
import ReviewImage from '../../../components/review/photo/ReviewImage';
import ReviewBody from '../../../components/review/photo/ReviewBody';
import CommentList from '../../../components/review/comments/CommentList';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/common/loading/Loading';

const PhotoReviewDetail = () => {
  const { reviewData, comments, sorting, setReviewData } = usePhotoReview();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['photoReviewDetail'],
    queryFn: async () => {
      return await setReviewData(id);
    },
    staleTime: 1000 * 10,
  });

  return (
    <>
      {data ? (
        <PhotoReviewContainer className="photo-review-container">
          <ReviewHeader title={'리뷰'} subTitle={reviewData.user.nickname} />
          <ReviewImage />
          <ReviewBody />
          <CommentList comments={comments} />
        </PhotoReviewContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PhotoReviewDetail;
