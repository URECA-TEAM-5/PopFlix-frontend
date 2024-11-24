import React from 'react';
import { TopSection } from './style/AlarmStyle';

const AlarmTop = () => {
  return (
    <TopSection>
      <img className="image__section" alt="no images" src="/assets/popcorn_score_5.svg" />
      <div className="text__section bold">
        <span>
          <span className="text__highlight">OOO</span>님에게
          <br />
        </span>
        <span>도착한 알림을 확인해보세요!</span>
      </div>
    </TopSection>
  );
};

export default AlarmTop;
