import React, { useEffect } from 'react';
import { LoadingWrapper } from './style/LoadingStyle';

const Loading = ({ message }) => {
  return (
    <LoadingWrapper>
      <img className="img__loading" src="/assets/loadingPopcorn.gif" alt="팝콘 로딩" />
      <h1>{message ? message : 'loading ...'}</h1>
    </LoadingWrapper>
  );
};

export default Loading;
