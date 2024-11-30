import React from 'react';
import { Dialog, Box, Divider, Button } from '@mui/material';
import { colors } from '../../../global/globalStyle';

const ImageSelectModal = ({ onSelectDefaultImage, onSelectDeviceImage, onClose }) => {
  return (
    <Dialog
      open={true} // 모달 열림 상태
      onClose={onClose} // 닫기 이벤트
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
            onSelectDefaultImage(); // 기본 이미지 선택 함수 호출
          }}
        >
          <p style={{ fontSize: '1.5rem', margin: '0rem' }} className="bold">
            기본 이미지 적용
          </p>
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
            onSelectDeviceImage(); // 디바이스에서 사진 선택 함수 호출
          }}
        >
          <p className="bold" style={{ fontSize: '1.5rem', margin: '0rem' }}>
            디바이스에서 사진 선택
          </p>
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
          onClick={onClose} // 모달 닫기
        >
          <p className="bold" style={{ fontSize: '1.5rem' }}>
            취소
          </p>
        </Button>
      </Box>
    </Dialog>
  );
};

export default ImageSelectModal;
