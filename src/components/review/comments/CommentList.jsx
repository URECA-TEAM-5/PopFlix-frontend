import React from 'react';
import { CommentListContainer, EmptyComments } from './style/CommentStyle';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';
import AddComment from './AddComment';
import ErrorEmpty from '../../error/ErrorEmpty';

const CommentList = ({ reviewData }) => {
  return (
    <>
      <CommentListContainer className="comment-list-container">
        {reviewData.comments ? (
          <div className="inner__section">
            <CommentHeader />
            {reviewData.comments.map((data, index) => {
              return (
                <div key={`${data.commentId}-${index}`}>
                  <CommentItem
                    isBest={index < 1 && true}
                    commentId={data.commentId}
                    // profileImageUrl={data.user.profileImageUrl}  <<< api 수정 후 반영 예정
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
        ) : (
          <EmptyComments className="empty-comments">
            <ErrorEmpty message={'작성된 댓글이 없습니다.'} description={'회원님의 소중한 댓글을 작성해주세요.'} />
            <div className="line"></div>
            <AddComment />
          </EmptyComments>
        )}
      </CommentListContainer>
    </>
  );
};

export default CommentList;
