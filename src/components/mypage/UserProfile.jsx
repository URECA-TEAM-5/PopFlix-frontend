import { Box, Button } from '@mui/material';
import React from 'react';
import { colors } from '../../global/globalStyle';

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
          border: `0.0625rem solid ${colors.white}`,
        }}
      >
        <img
          src="/assets/profile_1.svg"
          alt="User Profile"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
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
          <p className="regular">편집</p>
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;
