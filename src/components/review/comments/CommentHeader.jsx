import React, { useState } from 'react';
import { CommentListHeader, TextFilter } from './style/CommentStyle';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';

const CommentHeader = () => {
  const { reviewData } = usePhotoReview();
  const [filterState, setFilterState] = useState('hot');

  return (
    <CommentListHeader>
      <div className="comments__head">
        <span>{`전체 ${reviewData.comments.length}개`}</span>
        <div className="div__row">
          <TextFilter onClick={() => setFilterState('인기 순')} $isClicked={filterState === '인기 순'}>
            인기 순
          </TextFilter>
          <TextFilter onClick={() => setFilterState('최신 순')} $isClicked={filterState === '최신 순'}>
            최신 순
          </TextFilter>
        </div>
      </div>
    </CommentListHeader>
  );
};

export default CommentHeader;
