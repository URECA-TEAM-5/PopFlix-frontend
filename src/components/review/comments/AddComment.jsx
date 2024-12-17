import React, { useState } from 'react';
import { AddCommentContainer } from './style/CommentStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';
import { useParams } from 'react-router-dom';

const AddComment = () => {
  const [val, setVal] = useState('');
  const { addComment } = usePhotoReview();
  const { id } = useParams();

  const handleAddCommnet = async (e) => {
    e.preventDefault();
    const data = {
      comment: val,
      reviewId: id,
      userId: 9, // userId 수정 필요 ( 현재는 고정값 )
    };
    await addComment(data);
    alert(val);
  };

  return (
    <AddCommentContainer>
      <div className="comment__wrap">
        <input className="input__section regular" value={val} onChange={(e) => setVal(e.target.value)} type="text" placeholder="리뷰를 작성해 주세요." />
        <div className="button__add" onClick={handleAddCommnet}>
          <FontAwesomeIcon className="button__icon" icon={faArrowTurnDown} />
        </div>
      </div>
    </AddCommentContainer>
  );
};

export default AddComment;
