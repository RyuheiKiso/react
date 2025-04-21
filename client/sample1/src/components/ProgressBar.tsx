import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

type ProgressBarProps = {
  initialProgress: number; // 初期進捗値
};

const ProgressBar: React.FC<ProgressBarProps> = ({ initialProgress }) => {
  const [progress, setProgress] = useState(initialProgress);

  const updateProgress = (newProgress: number) => {
    if (newProgress < 0) {
      setProgress(0);
    } else if (newProgress > 100) {
      setProgress(100);
    } else {
      setProgress(newProgress);
    }
  };

  return (
    <div>
      <LinearProgress variant="determinate" value={progress} />
      <div style={{ marginTop: '10px' }}>
        <Button onClick={() => updateProgress(progress + 10)} variant="contained" color="primary">
          Increase
        </Button>
        <Button onClick={() => updateProgress(progress - 10)} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
          Decrease
        </Button>
      </div>
    </div>
  );
};

export default ProgressBar;
