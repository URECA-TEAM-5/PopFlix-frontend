import React, { useEffect, useRef } from 'react';
import { CommentListContainer } from './style/CommentStyle';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';
import AddComment from './AddComment';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';

const CommentList = () => {
  const { reviewData, setReviewData } = usePhotoReview();
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = true;
      console.log(`[isLoaded] >> ${isLoaded.current}}`);

      setReviewData(1);
      console.log(`[reviewData] >> ${reviewData}}`);
    }
  }, [reviewData]);

  return (
    <CommentListContainer className="comment-list-container">
      <div className="inner__section">
        <CommentHeader />
        <CommentItem />
        <AddComment />
      </div>
    </CommentListContainer>
  );
};

export default CommentList;
