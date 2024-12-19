import React from 'react';
import DefaultButton from '../common/buttons/DefaultButton';
import { useNavigate } from 'react-router-dom';
import { ErrorButtonContainer } from './style/ErrorStyle';

const ErrorButton = () => {
  const navigate = useNavigate();

  return (
    <ErrorButtonContainer>
      <DefaultButton name={'메인으로'} w={9.25} h={2.5} onClick={() => navigate('/main')} />
    </ErrorButtonContainer>
  );
};

export default ErrorButton;
