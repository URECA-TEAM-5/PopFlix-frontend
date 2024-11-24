import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../../global/globalStyle';

const UserInfoImage = ({ profileImage, onImageUpload }) => {
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
        }}
      >
        {profileImage && (
          <img
            src={profileImage}
            alt="프로필"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
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
          {/*<PhotoCameraIcon
            sx={{
              fontSize: '1.5rem',
              color: colors.black,
            }}
          />*/}
        </Box>
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
          }}
        />
      </Box>
    </Box>
  );
};

export default UserInfoImage;
