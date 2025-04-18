import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  
  const maximizeModal = () => {
    setIsMaximized(true);
  };

  const minimizeModal = () => {
    setIsMaximized(false);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullScreen={isMaximized}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {isMaximized ? (
          <Button onClick={minimizeModal} color="primary">Minimize</Button>
        ) : (
          <Button onClick={maximizeModal} color="primary">Maximize</Button>
        )}
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
