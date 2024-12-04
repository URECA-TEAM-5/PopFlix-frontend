import React from 'react';
import { CommentListContainer } from './style/CommentStyle';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';
import AddComment from './AddComment';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';

const CommentList = () => {
  const { reviewData } = usePhotoReview();

  return (
    <>
      {reviewData && (
        <CommentListContainer className="comment-list-container">
          <div className="inner__section">
            <CommentHeader />
            {reviewData.comments.map((data, index) => {
              return (
                <div key={`${data.commentId}-${index}`}>
                  <CommentItem
                    isBest={index < 1 && true}
                    commentId={data.commentId}
                    nickname={data.user.nickname}
                    createdAt={data.createdAt}
                    comment={data.comment}
                    likeCount={data.likeCount}
                  />
                </div>
              );
            })}
            <AddComment />
          </div>
        </CommentListContainer>
      )}
    </>
  );
};

export default CommentList;
