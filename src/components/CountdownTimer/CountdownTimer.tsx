import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { TimeDisplay } from './TimeDisplay';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <TimeDisplay key={key} label={key} value={value} />
      ))}
    </div>
  );
};