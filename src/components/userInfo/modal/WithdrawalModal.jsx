import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider } from '@mui/material';
import { colors } from '../../../global/globalStyle';
import { WithdrawalModalButtonHover, WithdrawalModalContent } from './style/UserInfoModalStyle';

const WithdrawalModal = ({ open, onClose }) => {
  const handleConfirm = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          margin: '0rem',
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
          pb: '1rem',
          fontSize: '0.875rem',
        }}
      >
        <WithdrawalModalContent className="bold">탈퇴 시 계정은 삭제되며 복구되지 않습니다.</WithdrawalModalContent>
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
        <WithdrawalModalButtonHover>
          <Button onClick={handleConfirm}>
            <p className="regular">탈퇴</p>
          </Button>
        </WithdrawalModalButtonHover>

        <WithdrawalModalButtonHover>
          <Button onClick={onClose}>
            <p className="regular">취소</p>
          </Button>
        </WithdrawalModalButtonHover>
      </DialogActions>
    </Dialog>
  );
};

export default WithdrawalModal;
