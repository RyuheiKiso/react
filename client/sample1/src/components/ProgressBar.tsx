import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 24,
          backgroundColor: '#ddd',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#4caf50',
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
