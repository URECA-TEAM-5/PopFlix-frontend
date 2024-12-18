import { Box, Button } from '@mui/material';
import React from 'react';
import { colors } from '../../global/globalStyle';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '3rem' }}>
      <Box
        sx={{
          position: 'relative',
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
          backgroundColor: colors.navy_gray,
          border: `0.0625rem solid ${colors.orange}`,
          overflow: 'hidden',
        }}
      >
        {' '}
        {(() => {
          const user = JSON.parse(sessionStorage.getItem('user')); // User 정보 가져오기
          const profileImage = user?.profileImage || user?.data?.defaultProfileImage; // profileImage 우선 사용

          return <img className="profile" src={profileImage} alt="profile" style={{ cursor: 'pointer', width: '100%', height: '100%' }} />;
        })()}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '2rem', pt: '1.5rem' }}>
        <h3>사용자</h3>
        <Button
          sx={{
            p: '0rem',
            mt: '0.5rem',
            borderRadius: '5rem',
            border: `0.0625rem solid ${colors.space_gray}`,
            '& .regular': {
              color: colors.cement_gray,
            },
          }}
        >
          <Link to="/updateUserInfo">
            <p className="regular">편집</p>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;
