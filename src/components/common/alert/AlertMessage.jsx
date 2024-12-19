import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { colors } from '../../../global/globalStyle';
import { useAlert } from '../../../stores/alert/AlertStore';

const AlertMessage = ({ handleClose }) => {
  const { alertOpen, alertMessage, alertType } = useAlert();

  return (
    <>
      <Snackbar
        open={alertOpen}
        autoHideDuration={450}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Alert severity={alertType} sx={{ width: '20rem', height: '3rem', alignItems: 'center', fontSize: '1rem' }}>
          <span className="regular" style={{ color: colors.space_gray }}>
            {alertMessage}
          </span>
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
