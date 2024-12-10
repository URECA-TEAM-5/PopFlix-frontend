import React from 'react';
import ErrorImage from '../../components/error/ErrorImage';
import ErrorMessage from '../../components/error/ErrorMessage';
import ErrorButton from '../../components/error/ErrorButton';
import { ErrorContainer } from '../../components/error/style/errorStyle';

const NotFound = () => {
  return (
    <ErrorContainer className="error-container">
      <ErrorImage />
      <ErrorMessage />
      <ErrorButton />
    </ErrorContainer>
  );
};

export default NotFound;
