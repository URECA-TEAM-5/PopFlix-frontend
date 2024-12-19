import React from 'react';
import { Box } from '@mui/material';

const LandingPage = () => {
  const handleVideoEnd = () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';

    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        component="video"
        src="/assets/popflix.webm"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </Box>
  );
};

export default LandingPage;
