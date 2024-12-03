import React from 'react';
import { CommentListHeader } from './style/CommentStyle';
import DefaultButton from '../../common/buttons/DefaultButton';
import { colors } from '../../../global/globalStyle';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';

const CommentHeader = () => {
  const { reviewData } = usePhotoReview();

  return (
    <CommentListHeader>
      <div className="comments__head">
        <span>전체 10개</span>
        <DefaultButton className="button__sort-by-likes" w={5} h={1.875} bgColor={colors.white} fontColor={colors.orange} name={'좋아요순'} />
      </div>
    </CommentListHeader>
  );
};

export default CommentHeader;
