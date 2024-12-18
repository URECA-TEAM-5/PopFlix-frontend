import React from 'react';
import { EmptyResultImage, EmptyResultWrapper } from './style/SearchResultStyle';

const SearchEmptyResult = ({ img, message, description, size, p }) => {
  return (
    <EmptyResultWrapper $padding={p}>
      <EmptyResultImage className="img__empty" $size={size} src={img ? img : '/assets/review_null.svg'} alt="empty images" />
      <p className="text__message">{message ? message : 'message'}</p>
      {description && <p className="text__description">{description}</p>}
    </EmptyResultWrapper>
  );
};

export default SearchEmptyResult;
