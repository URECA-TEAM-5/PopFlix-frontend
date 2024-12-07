import React, { useState, useRef } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { useEffect } from 'react';

const PhotoReviewModal = ({ open, onClose, onSubmit }) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null); // 파일 입력 필드 참조
  useEffect(() => {
    if (text && image) {
      setData({ text, image });
    }
  }, [text, image]);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 선택 창 열기
    }
  };

  const handleSubmit = () => {
    setData({ text: text, image: image });
    console.log(data);
    setText('');
    setImage(null);
    onSubmit();
  };

  const handleClose = () => {
    onClose();
    setImage(null);
    setText('');
  };

  const isSubmitDisabled = !text.trim() || !image;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth:920,
          bgcolor: '#25292E',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* 내용 입력칸 */}
        <TextField
          
          multiline
          rows={10}
          variant="filled"
          value={text}
          placeholder="여기에 리뷰를 작성해주세요!"
          onChange={(e) => setText(e.target.value)}
          sx={{
            width: '100%', // 100%로 설정하여 부모 박스의 너비에 맞게 확장
            maxWidth: 920, // 최대 너비를 920px로 설정
            mb: 2,
            '& .MuiFilledInput-root': {
              backgroundColor: '#25292E', // 배경색 설정
              border: 'none', // 테두리 제거
              '&:before, &:after': {
                content: 'none', // 기본 및 활성화 상태의 밑줄 제거
              },
            },
            '& .MuiInputBase-input': {
              color: 'white', // 텍스트 색상
            },
            '& .MuiInputLabel-root': {
              color: 'white', // 라벨 색상
            },
          }}
        />
        {/* 이미지 미리보기 또는 이미지 첨부 */}
        <Box sx={{
            borderBottom: '1px solid white',
        }}>
        <Box
          sx={{
            mb: 2,
            cursor: 'pointer',
            display: 'inline-block',
          }}
          onClick={handleImageClick} // 클릭 이벤트 연결
        >
          {image ? (
            <img
              src={image}
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
                border: 'none',
                '&:hover': {
                  backgroundColor: colors.orange,
                  border: 'none',
                  '&:focus': {
                    outline: 'none', // focus 상태에서 외곽선 제거
                    border: 'none', // focus 상태에서 테두리 제거
                  },
                },
              }}
            >
              이미지 첨부
            </Button>
          )}
        </Box>
        </Box>
        
        <input
          type="file"
          hidden
          accept="image/*"
          ref={fileInputRef} // 숨겨진 파일 입력 필드 참조
          onChange={handleImageChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1,paddingTop:1 }}>
          {/* 취소 버튼 */}
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
                boxShadow: 'none',
              border: 'none',
              backgroundColor: colors.navy_gray,
              color: colors.cement_gray,
              '&:hover': {
                boxShadow: 'none',
                border: 'none',
              },
            }}
          >
            취소
          </Button>
          {/* 등록 버튼 */}
          <Button
            variant="outlined"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            sx={{
              boxShadow: 'none',
              border: 'none',
              backgroundColor: isSubmitDisabled ? colors.navy_gray : colors.navy_gray,
              color: isSubmitDisabled ? colors.cement_gray : colors.orange,
              '&:hover': {
                boxShadow: 'none',
                border: 'none',
              },
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
