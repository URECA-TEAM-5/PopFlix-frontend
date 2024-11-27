import React from 'react';
import { PhotoReviewContainer } from '../../../components/review/photo/style/PhotoReviewStyle';
import ReviewHeader from '../../../components/review/photo/ReviewHeader';
import ReviewImage from '../../../components/review/photo/ReviewImage';
import ReviewBody from '../../../components/review/photo/ReviewBody';
import CommentList from '../../../components/review/photo/CommentList';

const PhotoReviewDetail = () => {
  return (
    <PhotoReviewContainer>
      <ReviewHeader />
      <ReviewImage />
      <ReviewBody />
      <CommentList />
    </PhotoReviewContainer>
  );
};

export default PhotoReviewDetail;
