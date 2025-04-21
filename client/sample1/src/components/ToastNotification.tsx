import React from 'react';
import Snackbar from './Snackbar';

export type ToastNotificationProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  trackInteraction?: (event: Event, metadata?: any) => void;
};

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  isVisible,
  onClose,
  trackInteraction,
}) => {
  return (
    <Snackbar
      message={message}
      isVisible={isVisible}
      onClose={onClose}
      trackInteraction={trackInteraction}
    />
  );
};

export default ToastNotification;
