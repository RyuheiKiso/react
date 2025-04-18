import React, { useState, useEffect } from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type SnackbarProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  // trackInteraction を追加
  trackInteraction?: (event: Event, metadata?: any) => void;
};

const Snackbar: React.FC<SnackbarProps> = ({ message, isVisible, onClose, trackInteraction }) => {
  const handleClose = () => {
    if (trackInteraction) {
      trackInteraction(new Event('close-snackbar'), { message });
    }
    onClose();
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (trackInteraction) {
          trackInteraction(new Event('auto-dismiss-snackbar'), { message });
        }
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, message, trackInteraction]);

  if (!isVisible) return null;

  return (
    <MuiSnackbar
      open={isVisible}
      message={message}
      autoHideDuration={3000}
      onClose={handleClose}
      action={
        <IconButton size="small" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Snackbar;
