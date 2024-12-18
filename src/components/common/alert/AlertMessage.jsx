import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { colors } from '../../../global/globalStyle';
import { useAlert } from '../../../stores/alert/AlertStore';

const AlertMessage = ({ message, handleClose, type }) => {
  const { alertOpen } = useAlert();

  return (
    <>
      <Snackbar
        open={alertOpen}
        autoHideDuration={1500}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Alert severity={type} sx={{ width: '20rem', height: '3rem', alignItems: 'center', fontSize: '1rem' }}>
          <span className="regular" style={{ color: colors.space_gray }}>
            {message}
          </span>
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
