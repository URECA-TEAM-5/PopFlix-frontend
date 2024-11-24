import React from 'react';
import { Modal, Box, Typography, Divider } from '@mui/material';
import { colors } from '../../../global/globalStyle';

const DefaultImageSelectModal = ({ open, onClose, onSelectImage }) => {
  const imageLinks = [
    '/assets/profile_1.svg',
    '/assets/profile_2.svg',
    '/assets/profile_3.svg',
    '/assets/profile_4.svg',
    '/assets/profile_5.svg',
    '/assets/profile_6.svg',
  ];

  const handleImageClick = (imageLink) => {
    if (onSelectImage) onSelectImage(imageLink);
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -75%)',
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
        <h2 className="bold" style={{ textAlign: 'left', margin: '1.75rem 0rem', paddingLeft: '2.5rem' }}>
          기본 이미지 선택
        </h2>

        {/* 구분선 */}
        <Divider
          sx={{
            bgcolor: colors.cement_gray,
            height: '0.063rem',
            mb: '1.875rem',
          }}
        />

        {/* 이미지 배치 */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            justifyItems: 'center',
          }}
        >
          {imageLinks.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: '6.25rem',
                height: '6.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                bgcolor: colors.navy_gray, // 배경색 (모달 배경색과 동일)
                border: '0.063rem solid',
                borderColor: colors.cement_gray,
                transition: 'border-color 0.3s ease',
                cursor: 'pointer',
                mb: '0.625rem',
                '&:hover': {
                  borderColor: colors.orange, // 호버 시 테두리 색상
                },
              }}
              onClick={() => handleImageClick(image)}
            >
              <Box
                component="img"
                src={image}
                alt={`Default Image ${index + 1}`}
                sx={{
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '50%',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default DefaultImageSelectModal;
