import React from 'react';
import { EmptyResultImage, EmptyResultWrapper } from './style/SearchResultStyle';

const SearchEmptyResult = ({ message, description, size }) => {
  return (
    <EmptyResultWrapper>
      <EmptyResultImage className="img__empty" $size={size} src="/assets/review_null.svg" alt="empty images" />
      <p className="text__message">{message ? message : 'message'}</p>
      {description && <p className="text__description">{description}</p>}
    </EmptyResultWrapper>
  );
};

export default SearchEmptyResult;
