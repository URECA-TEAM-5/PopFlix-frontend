import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, Button, Box } from '@mui/material';
import { colors } from '../../../global/globalStyle';
import { MyInfoModalButton, MyInfoModalUserGreet, MyInfoModalUserName } from './style/UserInfoModalStyle';
import { useNavigate } from 'react-router-dom';

export default function MyInfoModal({ open, onClose }) {
  const navigate = useNavigate();

  const storedUserData = localStorage.getItem('user');
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  const nickname = parsedUserData?.nickname || '';
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '15rem',
          height: '8rem',
          position: 'absolute',
          top: '10%',
          right: '3%',
          m: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <DialogContent
        sx={{
          p: '1rem',
          pt: '0.9rem',
          pb: '0.3rem',
          backgroundColor: colors.navy_gray,
          textAlign: 'center',
        }}
      >
        <MyInfoModalUserName>{nickname} 님</MyInfoModalUserName>
        <MyInfoModalUserGreet>반갑습니다.</MyInfoModalUserGreet>
        <Box
          sx={{
            borderBottom: `1px solid ${colors.cement_gray}`,
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="text"
            sx={{
              '&:focus': {
                outline: 'none',
              },
              '&:hover': {
                '& p': {
                  color: colors.orange,
                },
              },
            }}
            onClick={() => {
              onClose();
              navigate('/mypage'); // /mypage로 이동
            }}
          >
            <MyInfoModalButton className="bold">마이페이지</MyInfoModalButton>
          </Button>
          <Button
            variant="text"
            sx={{
              '&:focus': {
                outline: 'none',
              },
              '&:hover': {
                '& p': {
                  color: colors.orange,
                },
              },
            }}
            onClick={() => alert('로그아웃')}
          >
            <MyInfoModalButton className="bold">로그아웃</MyInfoModalButton>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
