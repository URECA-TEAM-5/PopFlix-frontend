import React, { useEffect, useRef } from 'react';
import request from '../../api/axios';
import LoadingSpinner from '../../components/suspense/LoadingSpinner';
import { Box } from '@mui/material';
import { useAlert } from '../../stores/alert/AlertStore';
import AlertMessage from '../../components/common/alert/AlertMessage';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { handleAlertOpen, handleAlertClose } = useAlert();
  const isLoad = useRef(false);
  const useNav = useNavigate();
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
        } catch (error) {
          window.location.href = '/';
          handleAlertOpen('error', '다시 로그인 해주세요.');
        }
      };

      initializeUserSession();
    }
  }, []);

  return (
    <Box
      sx={{
        height: '70vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& > div > img': {
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <AlertMessage type={''} message={''} handleClose={() => handleAlertClose()} />
      <LoadingSpinner />
      <h2 className="bold" style={{ marginTop: '1.5rem', marginLeft: '1.5rem' }}>
        Loading ...
      </h2>
    </Box>
  );
};

export default Welcome;
