import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, Button, Box } from '@mui/material';
import { colors } from '../../../global/globalStyle';

export default function MyInfoModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      PaperProps={{
        sx: {
          position: 'absolute',
          top: '6rem',
          right: '6rem',
          m: 0,
        },
      }}
    >
      <DialogContent
        sx={{
          p: '1rem',
          pt: '0.5rem',
          pb: '0.3rem',
          backgroundColor: colors.navy_gray,
          textAlign: 'center',
        }}
      >
        <h5 style={{ color: colors.orange }}>User 회원님</h5> {/*유저이름으로 변경 필요*/}
        <h6 style={{ color: '#fff', paddingBottom: '0.5rem' }}>반갑습니다.</h6>
        <Box
          sx={{
            borderBottom: '1px solid #84868c',
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
            onClick={() => alert('마이페이지 이동')}
          >
            <p className="bold" style={{ fontSize: '0.7rem' }}>
              마이페이지
            </p>
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
            <p className="bold" style={{ fontSize: '0.7rem' }}>
              로그아웃
            </p>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}