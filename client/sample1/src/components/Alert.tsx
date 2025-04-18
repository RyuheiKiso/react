import React from 'react';
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';

type AlertProps = {
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
} & MuiAlertProps;

const CustomAlert: React.FC<AlertProps> = ({ message, type, ...props }) => {
  return (
    <MuiAlert severity={type} {...props}>
      {message}
    </MuiAlert>
  );
};

const soundAlert = () => {
  console.log('Playing alert sound');
};

export default CustomAlert;
