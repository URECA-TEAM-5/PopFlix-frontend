import React, { useState } from 'react';
import { CommentListHeader, TextFilter } from './style/CommentStyle';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';
import { useParams } from 'react-router-dom';

const CommentHeader = () => {
  const { reviewData, setReviewData } = usePhotoReview();
  const [filterState, setFilterState] = useState('latest');
  const { id } = useParams();

  const handleCategory = (category) => {
    setFilterState(category);
    setReviewData(id, category);
  };

  return (
    <CommentListHeader>
      <div className="comments__head">
        <span>{`전체 ${reviewData.comments.length}개`}</span>
        <div className="div__row">
          <TextFilter onClick={() => handleCategory('hot')} $isClicked={filterState === 'hot'}>
            인기 순
          </TextFilter>
          <TextFilter onClick={() => handleCategory('latest')} $isClicked={filterState === 'latest'}>
            최신 순
          </TextFilter>
        </div>
      </div>
    </CommentListHeader>
  );
};

export default CommentHeader;
