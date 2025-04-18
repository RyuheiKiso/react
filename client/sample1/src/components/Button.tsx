import React from 'react';
import Button from '@mui/material/Button';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

const setButtonTooltip = (tooltip: string) => {
  console.log(`Tooltip set to: ${tooltip}`);
};

export default CustomButton;
