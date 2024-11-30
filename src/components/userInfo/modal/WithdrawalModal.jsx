import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider } from '@mui/material';
import { colors } from '../../../global/globalStyle';

const WithdrawalModal = ({ open, onClose }) => {
  const handleConfirm = () => {
    console.log('탈퇴 확인');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '21.88rem',
          borderRadius: '0.63rem',
          backgroundColor: colors.navy_gray,
        },
      }}
    >
      {/* 제목 */}
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1.25rem',
          padding: '1rem 0 0.5rem',
        }}
      >
        <p className="bold">정말 탈퇴하시겠어요?</p>
      </DialogTitle>

      {/* 내용 */}
      <DialogContent
        sx={{
          textAlign: 'center',
          padding: '0.5rem 1.5rem 1rem',
          color: '#A0A0A0',
          fontSize: '0.875rem',
        }}
      >
        <p className="regular" style={{ color: colors.cement_gray }}>
          탈퇴 시 계정은 삭제되며 복구되지 않습니다.
        </p>
      </DialogContent>

      {/* 구분선 */}
      <Divider sx={{ borderColor: '#505050' }} />

      {/* 버튼 */}
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0.5rem 1.5rem',
          gap: '6.25rem',
        }}
      >
        <Button
          onClick={handleConfirm}
          sx={{
            '&:hover': {
              '& p': {
                color: colors.orange,
              },
            },
          }}
        >
          <p className="regular">탈퇴</p>
        </Button>
        <Button
          onClick={onClose}
          sx={{
            '&:hover': {
              '& p': {
                color: colors.orange,
              },
            },
          }}
        >
          <p className="regular">취소</p>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WithdrawalModal;
