import React from 'react';
import { CommentListContainer } from './style/CommentStyle';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';
import AddComment from './AddComment';

const CommentList = () => {
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
