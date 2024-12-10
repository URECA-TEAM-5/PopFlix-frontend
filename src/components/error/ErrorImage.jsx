import React from 'react';
import { ErrorImageContainer } from './style/errorStyle';

const ErrorImage = () => {
  return (
    <ErrorImageContainer className="image-container">
      <span className="text bold">4</span>
      <img src="/assets/error_404.svg" alt="404 이미지" />
      <span className="text bold">4</span>
    </ErrorImageContainer>
  );
};

export default ErrorImage;
