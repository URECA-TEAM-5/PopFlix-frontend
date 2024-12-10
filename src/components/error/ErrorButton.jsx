import React from 'react';
import { ErrorButtonContainer } from './style/errorStyle';
import DefaultButton from '../common/buttons/DefaultButton';
import { useNavigate } from 'react-router-dom';

const ErrorButton = () => {
  const navigate = useNavigate();

  return (
    <ErrorButtonContainer>
      <DefaultButton name={'메인으로'} w={9.25} h={2.5} onClick={() => navigate('/')} />
    </ErrorButtonContainer>
  );
};

export default ErrorButton;
