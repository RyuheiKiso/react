import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';

type TimerProps = {
  initialTime: number;
  onTimeUp?: () => void;
  trackInteraction?: (event: Event, metadata?: any) => void;
};

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp, trackInteraction }) => {
  const [time, setTime] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerIdRef.current === null) {
      timerIdRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerIdRef.current!);
            timerIdRef.current = null;
            if (onTimeUp) onTimeUp();
            if (trackInteraction) {
              trackInteraction(new Event('time-up'), { initialTime });
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    if (!isPaused) startTimer();
    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
    };
  }, [isPaused]);

  const pauseTimer = () => {
    setIsPaused(true);
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(initialTime);
    setIsPaused(false);
  };

  return (
    <div>
      {time} seconds remaining
      <Button variant="contained" onClick={pauseTimer}>Pause</Button>
      <Button variant="contained" onClick={resetTimer}>Reset</Button>
    </div>
  );
};

export default Timer;
