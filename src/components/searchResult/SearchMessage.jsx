import React from 'react';
import { MessageWrapper } from './style/SearchResultStyle';

const SearchMessage = ({ keyword }) => {
  return (
    <MessageWrapper>
      <div className="text__message bold">
        <span className="text__highlight">'{keyword}'</span>
        <span>(으)로 검색한 결과 입니다.</span>
      </div>
      <div className="text__description">검색결과는 '영화명/출연진/감독'을 모두 포함한 결과 입니다.</div>
    </MessageWrapper>
  );
};

export default SearchMessage;
