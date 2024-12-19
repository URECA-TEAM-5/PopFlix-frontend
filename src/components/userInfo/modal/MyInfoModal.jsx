import { Dialog, DialogContent, Button, Box } from '@mui/material';
import { colors } from '../../../global/globalStyle';
import { MyInfoModalButton, MyInfoModalUserGreet, MyInfoModalUserName } from './style/UserInfoModalStyle';
import request from '../../../api/axios';
import { useAlert } from '../../../stores/alert/AlertStore';
import AlertMessage from '../../common/alert/AlertMessage';

export default function MyInfoModal({ open, onClose }) {
  const { handleAlertOpen, handleAlertClose } = useAlert();

  const storedUserData = sessionStorage.getItem('user');
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  const nickname = parsedUserData?.nickname || '';

  const logout = async () => {
    try {
      await request.post('/auth/logout');
      handleAlertOpen('success', '로그아웃 성공');

      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('user');

      window.location.href = '/';
    } catch (error) {
      handleAlertOpen('error', '로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '15rem',
          height: '8rem',
          position: 'fix',
          bottom: '19.38rem',
          left: '26.5rem',
          m: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <AlertMessage type={''} message={''} handleClose={() => handleAlertClose()} />
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
              window.location.href = '/mypage';
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
            onClick={logout}
          >
            <MyInfoModalButton className="bold">로그아웃</MyInfoModalButton>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
