import { useState, useEffect } from 'react';

export interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export const useCountdown = (initialMinutes = 54): CountdownTime => {
  const [time, setTime] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: initialMinutes,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUnit = (num: number): string => num.toString().padStart(2, '0');

  return {
    days: formatUnit(time.days),
    hours: formatUnit(time.hours),
    minutes: formatUnit(time.minutes),
    seconds: formatUnit(time.seconds),
  };
};
