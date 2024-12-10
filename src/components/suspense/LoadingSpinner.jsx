import React from 'react';
import { SpinnerContainer } from './style/SpinnerStyle';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <h1>데이터를 불러오는 중 입니다</h1>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
