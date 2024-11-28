import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../global/globalStyle';
import ImageSelectModal from './modal/ImageSelectModal';
import DefaultImageSelectModal from './modal/DefaultImageSelectModal';

const UserInfoImage = ({ profileImage, setProfileImage }) => {
  const [modalOpen, setModalOpen] = useState({
    imageSelectModalOpen: false,
    defaultImageSelectModalOpen: false,
  });
  const fileInputRef = useRef(null);

  const updateModalState = (updates) => {
    setModalOpen((prev) => ({
      ...prev, // 기존 상태 복사
      ...updates, // 업데이트할 값 덮어쓰기
    }));
  };

  // 이미지 선택 모달 열기/닫기
  const setImageSelectModalOpen = (isOpen) => {
    setModalOpen((prev) => {
      const updatedState = { ...prev, imageSelectModalOpen: isOpen };
      console.log('Updated Modal State:', updatedState); // 상태가 정확히 변경되는지 확인
      return updatedState;
    });
  };

  // 기본 이미지 선택 모달 열기/닫기
  const setDefaultImageSelectModalOpen = (isOpen) => {
    setModalOpen((prev) => ({ ...prev, defaultImageSelectModalOpen: isOpen }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setImageSelectModalOpen(false);
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pb: '3.5rem',
      }}
    >
      <h2
        className="bold"
        style={{
          textAlign: 'center',
          margin: '0rem',
          paddingBottom: '2.188rem',
        }}
      >
        프로필을 작성해 주시면
        <br />
        PopFlix에서 더 열심히 추천해드릴게요!
      </h2>
      <Box
        sx={{
          position: 'relative',
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
          backgroundColor: colors.navy_gray,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => updateModalState({ imageSelectModalOpen: true })} // 모달 열기
      >
        {profileImage && (
          <img
            src={profileImage}
            alt="프로필"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        )}
        <Box
          sx={{
            position: 'absolute',
            bottom: '0rem',
            right: '-0.2rem',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: '#84868c',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="public/assets/camera.svg"
            alt="카메라 아이콘"
            style={{
              width: '1.25rem',
              height: '1.25rem',
            }}
          />
        </Box>

        {/* ImageSelectModal */}
        {modalOpen.imageSelectModalOpen && (
          <ImageSelectModal
            onSelectDefaultImage={() => {
              updateModalState({ imageSelectModalOpen: false, defaultImageSelectModalOpen: true });
              console.log('Switched to DefaultImageSelectModal');
            }}
            onSelectDeviceImage={() => {
              fileInputRef.current.click(); // 파일 업로드 창 열기
              updateModalState({ imageSelectModalOpen: false });
              console.log('File upload triggered and ImageSelectModal closed'); // 디버깅용 로그
            }}
            onClose={() => {
              updateModalState({ imageSelectModalOpen: false });
              console.log('ImageSelectModal closed'); // 디버깅용 로그
            }}
          />
        )}

        {/* DefaultImageSelectModal */}
        {modalOpen.defaultImageSelectModalOpen && (
          <DefaultImageSelectModal
            onSelectImage={(image) => {
              setProfileImage(image); // 기본 이미지 설정
              updateModalState({ defaultImageSelectModalOpen: false });
              console.log('DefaultImageSelectModal closed with selected image'); // 디버깅용 로그
            }}
            onClose={() => {
              updateModalState({ defaultImageSelectModalOpen: false });
              console.log('DefaultImageSelectModal closed'); // 디버깅용 로그
            }}
          />
        )}

        <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} ref={fileInputRef} />
      </Box>
    </Box>
  );
};

export default UserInfoImage;
