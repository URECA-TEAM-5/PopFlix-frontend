import React from 'react';
import { ErrorEmptyWrapper } from './style/ErrorStyle';

const ErrorEmpty = ({ message, description }) => {
  return (
    <ErrorEmptyWrapper>
      <img className="img__empty" src="/assets/review_null.svg" alt="리뷰 없음" />
      <div className="text__message bold">{message ? message : 'message'}</div>
      <div className="text__description bold">{description && description}</div>
    </ErrorEmptyWrapper>
  );
};

export default ErrorEmpty;
