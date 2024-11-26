import React from 'react';
import { EmptyMessageContainer } from './style/AlarmStyle';

const AlaramEmpty = () => {
  return (
    <EmptyMessageContainer>
      <img className="image__empty" src="/assets/review_null.svg" alt="Score Null image" />
      <div className="text__section">
        <p>
          <span className="text__highlight">OOO</span>님에게
        </p>
        <p>도착한 알림이 없습니다 ...</p>
      </div>
      <div className="button__section">
        <div className="button">
          <p className="button__message">
            <img className="button__image" src="/assets/popcorn_score_null.svg" alt="버튼 이미지" />
            <span className="text__highlight">OOO</span>님의 리뷰를 작성해주세요~!
          </p>
          <p className="text__subMessage">영화 목록 페이지 이동하기</p>
        </div>
      </div>
    </EmptyMessageContainer>
  );
};

export default AlaramEmpty;
