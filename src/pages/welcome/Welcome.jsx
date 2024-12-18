import React, { useEffect, useRef } from 'react';
import request from '../../api/axios';

const Welcome = () => {
  const isLoad = useRef(false);
  useEffect(() => {
    if (!isLoad.current) {
      isLoad.current = true;
      const initializeUserSession = async () => {
        try {
          // 사용자 정보 가져오기
          const userInfoResponse = await request.get('/auth/me');
          const userInfo = userInfoResponse.data.response;

          // 사용자 정보를 sessionStorage에 저장
          sessionStorage.setItem('user', JSON.stringify(userInfo));

          // AccessToken 발급
          const accessTokenResponse = await request.post('/auth/refresh');
          const accessToken = accessTokenResponse.data.response.accessToken;

          // AccessToken 저장
          sessionStorage.setItem('accessToken', accessToken);

          // 모든 작업이 끝나면 /main 페이지로 이동
          window.location.href = '/';
        } catch (error) {
          console.error('사용자 정보 초기화 실패:', error);
          alert('다시 로그인 해주세요.');
          window.location.href = '/';
        }
      };

      initializeUserSession();
    }
  }, []);

  return (
    <div>
      <h1>환영합니다람쥐!!!</h1>
    </div>
  );
};

export default Welcome;
