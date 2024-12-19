import React from 'react';
import { BodyContainer } from './style/PhotoReviewStyle';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';

const ReviewBody = () => {
  const { reviewData } = usePhotoReview();

  return (
    <>
      {reviewData && (
        <BodyContainer>
          <div className="inner__section">
            <div className="review__section">
              <p className="text__review regular">{reviewData.review}</p>
              <p className="text__report">신고</p>
            </div>
          </div>
        </BodyContainer>
      )}
    </>
  );
};

export default ReviewBody;
