import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

type ProgressBarProps = {
  progress: number; // 0～100の値
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <LinearProgress variant="determinate" value={progress} />
  );
};

export default ProgressBar;
