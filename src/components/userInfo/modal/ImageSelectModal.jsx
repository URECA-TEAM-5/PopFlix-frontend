import React, { useState } from 'react';
import { Modal, Box, Typography, Divider, Button } from '@mui/material';
import { colors } from '../../../global/globalStyle'; // colors의 정확한 경로 확인 필요

const ImageSelectModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '37.5rem',
            height: '24.688rem',
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
              flexDirection: 'column', // 세로 배치
              justifyContent: 'center', // 수직 가운데 정렬
              alignItems: 'center', // 가로 가운데 정렬
              height: '100%', // 부모 Box의 높이에 맞춤
              px: 4, // 좌우 padding 추가
            }}
          >
            {/* 텍스트 - 기본 이미지 적용 */}
            <Button
              onClick={handleClose}
              fullWidth
              sx={{
                '&:focus': {
                  outline: 'none',
                },
              }}
            >
              <p style={{ color: colors.orange, fontSize: '1.875rem', margin: '0rem' }} className="bold">
                기본 이미지 적용
              </p>
            </Button>

            {/* 버튼 - 디바이스에서 사진 선택 */}
            <Button
              fullWidth
              onClick={handleClose}
              sx={{
                '&:focus': {
                  outline: 'none',
                },
              }}
            >
              <p className="bold" style={{ fontSize: '1.875rem', margin: '0rem' }}>
                디바이스에서 사진 선택
              </p>
            </Button>

            {/* 구분선 */}
            <Divider
              sx={{
                bgcolor: colors.cement_gray,
                width: '100%',
              }}
            />

            {/* 취소 버튼 */}
            <Button
              fullWidth
              onClick={handleClose}
              sx={{
                '&:focus': {
                  outline: 'none',
                },
              }}
            >
              <p className="bold" style={{ fontSize: '1.875rem', margin: '0rem' }}>
                취소
              </p>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ImageSelectModal;
