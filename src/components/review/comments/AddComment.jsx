import React from 'react';
import { AddCommentContainer } from './style/CommentStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';

const AddComment = () => {
  return (
    <AddCommentContainer>
      <div className="comment__wrap">
        <input className="input__section regular" type="text" placeholder="리뷰를 작성해 주세요." />
        <div className="button__add">
          <FontAwesomeIcon className="button__icon" icon={faArrowTurnDown} />
        </div>
      </div>
    </AddCommentContainer>
  );
};

export default AddComment;
