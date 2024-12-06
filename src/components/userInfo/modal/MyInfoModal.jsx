import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, Button, Box } from '@mui/material';
import { colors } from '../../../global/globalStyle';
import { MyInfoModalButton, MyInfoModalUserGreet, MyInfoModalUserName } from './style/UserInfoModalStyle';

export default function MyInfoModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  {
    /*나중에 위치 박을떄 anchorEl로 아이콘 밑에 박기*/
  }
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: '15rem',
          height: '8rem',
          position: 'absolute',
          top: '10%',
          right: '18%',
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
        <MyInfoModalUserName>User 님</MyInfoModalUserName> {/*유저이름으로 변경 필요*/}
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
            onClick={() => alert('마이페이지 이동')}
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
