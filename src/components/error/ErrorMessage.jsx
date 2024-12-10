import React from 'react';
import { ErrorMessageContainer } from './style/errorStyle';

const ErrorMessage = () => {
  return (
    <ErrorMessageContainer>
      <p className="text__title">죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <p className="text__subtitle regular">존재하지 않는 주소를 입력하셨거나,</p>
      <p className="text__subtitle regular">요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
