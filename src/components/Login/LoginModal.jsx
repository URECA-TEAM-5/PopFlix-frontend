import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { LoginModalGoogleLogo, LoginModalImage, LoginModalNaverLogo, LoginModalTitle } from './style/LoginModalStyle';

const LoginModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNaverLogin = () => {
    window.location.href = '/'; // 네이버 로그인 엔드포인트
  };

  const handleGoogleLogin = () => {
    window.location.href = '/'; // 구글 로그인 엔드포인트
  };

  return (
    <div>
      {/*확인하기 위해 true로 해두었음 나중에 open으로 변경 */}
      <Modal open={true} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '25rem',
            height: 'auto',
            bgcolor: colors.navy_gray,
            borderRadius: '0.5rem',
            p: '2rem',
            textAlign: 'center',
            '&:focus': {
              outline: 'none',
            },
          }}
        >
          <LoginModalTitle className="bold">
            오랜만이에요! 로그인하고 <br />
            영화에 대한 생각을 공유해주세요!
          </LoginModalTitle>

          <LoginModalImage src={'public/assets/logo.svg'} alt="로고" />

          {/*네이버 버튼*/}
          <Button
            variant="contained"
            onClick={handleNaverLogin}
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#03C75A',
              width: '100%',
              height: '2.5rem',
              mb: '15px',
              '&:focus': {
                outline: 'none',
              },
              '&:hover': {
                opacity: 0.9,
              },
              '.MuiButton-startIcon': {
                margin: 0,
              },
            }}
            startIcon={<LoginModalNaverLogo src="/assets/naver_login_btn.svg" alt="N" />}
          >
            <p>네이버 로그인</p>
          </Button>
          {/*구글 버튼*/}
          <Button
            variant="contained"
            sx={{
              width: '100%',
              textTransform: 'none',
              fontWeight: 'bold',
              backgroundColor: '#fff',
              color: '#000',
              height: '2.5rem',
              border: '1px solid #ccc',
              '&:hover': {
                opacity: 0.9,
              },
              '&:focus': {
                outline: 'none',
              },
            }}
            onClick={handleGoogleLogin}
            startIcon={<LoginModalGoogleLogo src="public/assets/google_login_btn.svg" alt="G" />}
          >
            <p>구글 로그인</p>
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
