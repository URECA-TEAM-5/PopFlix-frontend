import React from 'react';
import { Dialog, Box, Divider, Button } from '@mui/material';
import { colors } from '../../../global/globalStyle';
import { ImageSelectModalButton } from './style/UserInfoModalStyle';

const ImageSelectModal = ({ onSelectDefaultImage, onSelectDeviceImage, onClose }) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '28rem',
          height: '15rem',
          bgcolor: colors.navy_gray,
          borderRadius: '0.625rem',
          textAlign: 'center',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          px: 4,
        }}
      >
        {/* 기본 이미지 적용 버튼 */}
        <Button
          fullWidth
          sx={{
            '&:focus': {
              outline: 'none',
            },
            '&:hover': {
              '& p': {
                color: colors.orange,
              },
            },
            marginBottom: '1rem',
          }}
          onClick={() => {
            onSelectDefaultImage();
          }}
        >
          <ImageSelectModalButton className="bold">기본 이미지 적용</ImageSelectModalButton>
        </Button>

        {/* 디바이스에서 사진 선택 버튼 */}
        <Button
          fullWidth
          sx={{
            '&:focus': {
              outline: 'none',
            },
            '&:hover': {
              '& p': {
                color: colors.orange,
              },
            },
            marginBottom: '1.5rem',
          }}
          onClick={() => {
            onSelectDeviceImage();
          }}
        >
          <ImageSelectModalButton className="bold">디바이스에서 사진 선택</ImageSelectModalButton>
        </Button>

        {/* 구분선 */}
        <Divider
          sx={{
            bgcolor: colors.cement_gray,
            width: '100%',
            marginBottom: '0.5rem',
          }}
        />

        {/* 취소 버튼 */}
        <Button
          fullWidth
          sx={{
            '&:focus': {
              outline: 'none',
            },
            '&:hover': {
              '& p': {
                color: colors.orange,
              },
            },
            '& p': {
              margin: '0rem',
            },
          }}
          onClick={onClose}
        >
          <ImageSelectModalButton className="bold">취소</ImageSelectModalButton>
        </Button>
      </Box>
    </Dialog>
  );
};

export default ImageSelectModal;
