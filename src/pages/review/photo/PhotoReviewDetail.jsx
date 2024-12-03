import React, { useEffect, useRef } from 'react';
import { PhotoReviewContainer } from '../../../components/review/photo/style/PhotoReviewStyle';
import ReviewHeader from '../../../components/review/photo/ReviewHeader';
import ReviewImage from '../../../components/review/photo/ReviewImage';
import ReviewBody from '../../../components/review/photo/ReviewBody';
import CommentList from '../../../components/review/comments/CommentList';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';

const PhotoReviewDetail = () => {
  const { reviewData, setReviewData } = usePhotoReview();
  const isLoaded = useRef(true);

  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = false;
      console.log(`[isLoaded] >> ${isLoaded.current}`);
      setReviewData(1);
    }
  }, [reviewData]);

  return (
    <>
      {reviewData != {} && (
        <PhotoReviewContainer className="photo-review-container">
          {/* <ReviewHeader title={'리뷰'} subTitle={reviewData.user.userId} /> */}
          <ReviewHeader title={'리뷰'} subTitle={'비트박스'} />
          <ReviewImage />
          <ReviewBody />
          <CommentList />
        </PhotoReviewContainer>
      )}
    </>
  );
};

export default PhotoReviewDetail;
