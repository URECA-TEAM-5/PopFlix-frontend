import React from 'react';
import { SpinnerContainer } from './style/SpinnerStyle';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <img src="/assets/loadingPopcorn.gif" alt="Spinner" />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
