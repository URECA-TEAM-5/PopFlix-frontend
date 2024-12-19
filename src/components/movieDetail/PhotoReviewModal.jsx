import React, { useState, useRef } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';
import { createPhotoReview } from '../../api/movieDetail/movieDetail'; // createPhotoReview 경로를 올바르게 설정하세요.
import { colors } from '../../global/globalStyle';

const PhotoReviewModal = ({ open, onClose, onSubmit, userId, movieId }) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async () => {
    try {
      await createPhotoReview(text, image, movieId, userId); // API 요청
      console.log('리뷰 등록 성공');
      onSubmit(); // 상위 컴포넌트에 알림
      handleClose(); // 모달 닫기
    } catch (error) {
      console.error('리뷰 등록 실패:', error);
    }
  };

  const handleClose = () => {
    onClose();
    setText('');
    setImage(null);
    setImagePreview(null);
  };

  const isSubmitDisabled = !text.trim() || !image;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: 920,
          bgcolor: '#25292E',
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <TextField
          multiline
          rows={10}
          variant="filled"
          value={text}
          placeholder="여기에 리뷰를 작성해주세요!"
          onChange={(e) => setText(e.target.value)}
          sx={{
            width: '100%',
            maxWidth: 920,
            mb: 2,
            '& .MuiFilledInput-root': {
              backgroundColor: '#25292E',
              '&:before, &:after': { content: 'none' },
            },
            '& .MuiInputBase-input': { color: 'white' },
          }}
        />

        <Box sx={{ borderBottom: '1px solid white', padding: '1rem' }}>
          <Box
            sx={{ mb: 2, cursor: 'pointer', display: 'inline-block', p: 1 }}
            onClick={handleImageClick}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="첨부된 이미지"
                style={{
                  width: 150,
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 4,
                }}
              />
            ) : (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.orange,
                  '&:hover': { backgroundColor: colors.orange },
                }}
              >
                이미지 첨부
              </Button>
            )}
          </Box>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, padding: 1 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              backgroundColor: colors.navy_gray,
              color: colors.cement_gray,
              '&:hover': { backgroundColor: colors.navy_gray },
            }}
          >
            취소
          </Button>
          <Button
            variant="outlined"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            sx={{
              backgroundColor: isSubmitDisabled ? colors.navy_gray : colors.orange,
              color: isSubmitDisabled ? colors.cement_gray : colors.orange,
              '&:hover': { backgroundColor: isSubmitDisabled ? colors.navy_gray : colors.orange },
            }}
          >
            등록
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PhotoReviewModal;
