import React from 'react';
import { PhotoReviewContainer } from '../../../components/review/photo/style/PhotoReviewStyle';
import ReviewHeader from '../../../components/review/photo/ReviewHeader';
import ReviewImage from '../../../components/review/photo/ReviewImage';
import ReviewBody from '../../../components/review/photo/ReviewBody';
import CommentList from '../../../components/review/comments/CommentList';

const PhotoReviewDetail = () => {
  return (
    <PhotoReviewContainer className="photo-review-container">
      <ReviewHeader title={'리뷰'} subTitle={'비트박스'} />
      <ReviewImage />
      <ReviewBody />
      <CommentList />
    </PhotoReviewContainer>
  );
};

export default PhotoReviewDetail;
