import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../global/globalStyle';
import ImageSelectModal from './modal/ImageSelectModal';
import DefaultImageSelectModal from './modal/DefaultImageSelectModal';
import { UserInfoImageCameraIcon, UserInfoImageDeviceInput, UserInfoImageProfileImage } from './style/UserInfoStyle';

const UserInfoImage = ({ profileImage, setProfileImage }) => {
  const [isImageSelectModalOpen, setIsImageSelectModalOpen] = useState(false);
  const [isDefaultImageSelectModalOpen, setIsDefaultImageSelectModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  // 파일 업로드
  const handleFileUpload = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        setProfileImage(URL.createObjectURL(file));
      }
    },
    [setProfileImage]
  );

  // 모달 열기
  const handleOpenImageSelectModal = () => {
    setIsImageSelectModalOpen(true);
  };

  // 모달 닫기
  const closeModalWithDelay = () => {
    setTimeout(() => {
      setIsImageSelectModalOpen(false);
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pb: '3.5rem',
        position: 'relative',
      }}
    >
      <h2
        className="bold"
        style={{
          textAlign: 'center',
          margin: '0rem',
          paddingBottom: '3.5rem',
        }}
      >
        프로필을 작성해 주시면
        <br />
        PopFlix에서 더 열심히 추천해드릴게요!
      </h2>
      <Box
        sx={{
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
          backgroundColor: colors.navy_gray,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={handleOpenImageSelectModal}
      >
        {profileImage && <UserInfoImageProfileImage src={profileImage} alt="프로필" />}
        <Box
          sx={{
            position: 'absolute',
            bottom: '3.7rem',
            right: '12.4rem',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: colors.cement_gray,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <UserInfoImageCameraIcon src="/assets/camera.svg" alt="카메라 아이콘" />
        </Box>

        {/* 사진 선택 모달 */}
        {isImageSelectModalOpen && (
          <ImageSelectModal
            onSelectDefaultImage={() => {
              setIsDefaultImageSelectModalOpen(true);
              closeModalWithDelay();
            }}
            onSelectDeviceImage={() => {
              fileInputRef.current.click();
              closeModalWithDelay();
            }}
            onClose={closeModalWithDelay}
          />
        )}

        {/* 기본 사진 선택 모달 */}
        {isDefaultImageSelectModalOpen && (
          <DefaultImageSelectModal
            open={isDefaultImageSelectModalOpen}
            onSelectImage={(image) => {
              setProfileImage(image);
              setIsDefaultImageSelectModalOpen(false);
            }}
            onClose={() => {
              setIsDefaultImageSelectModalOpen(false);
            }}
          />
        )}

        <UserInfoImageDeviceInput type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} />
      </Box>
    </Box>
  );
};

export default UserInfoImage;
