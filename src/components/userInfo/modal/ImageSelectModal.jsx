import React, { useState } from 'react';
import { Modal, Box, Divider, Button } from '@mui/material';
import { colors } from '../../../global/globalStyle';

const ImageSelectModal = ({ onSelectDefaultImage, onSelectDeviceImage, onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '28rem',
          height: '15rem',
          bgcolor: colors.navy_gray,
          borderRadius: '0.625rem',
          textAlign: 'center',
          '&:focus': {
            outline: 'none',
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
          {/* 텍스트 - 기본 이미지 적용 */}
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
            onClick={onSelectDefaultImage}
          >
            <p style={{ fontSize: '1.5rem', margin: '0rem' }} className="bold">
              기본 이미지 적용
            </p>
          </Button>

          {/* 버튼 - 디바이스에서 사진 선택 */}
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
              marginBottom: '1.5rem', // 디바이스에서 사진 선택과 구분선 사이 간격
            }}
            onClick={onSelectDeviceImage}
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
            onClick={onClose}
          >
            <p className="bold" style={{ fontSize: '1.5rem' }}>
              취소
            </p>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageSelectModal;
