import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useLanding } from '../../stores/landing/LandingStore';

const LandingPage = () => {
  const { streaming, setStreaming } = useLanding();
  const isLoaded = useRef(false);

  const handleVideoEnd = () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';

    setTimeout(() => {
      window.location.href = '/';
      setStreaming(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      setStreaming(true);
    }
  }, []);

  return (
    <>
      {streaming && (
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
      )}
    </>
  );
};

export default LandingPage;
