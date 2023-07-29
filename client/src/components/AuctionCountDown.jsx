/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';
import { Typography } from '@mui/material';

const MILLISECONDS_IN_SEC = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
// const HOURS_IN_DAY = 24;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SEC * SECONDS_IN_MINUTE;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
// const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;

function AuctionCountDown({ finishTime }) {
  const calculateTimeLeft = useCallback(() => {
    const timeNow = new Date().getTime();
    return Math.max(0, finishTime - timeNow);
  }, [finishTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  function formatTime(ms) {
    // const days = Math.floor(ms / MILLISECONDS_IN_DAY);
    // const hours = Math.floor((ms % MILLISECONDS_IN_DAY) / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor((ms % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor((ms % MILLISECONDS_IN_MINUTE) / MILLISECONDS_IN_SEC);

    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  const auctionResultTime = timeLeft === 0 ? 'Завершен' : formatTime(timeLeft);

  return (
    <Typography fontWeight="500" color="secondary.grey">{auctionResultTime}</Typography>
  );
}

export default AuctionCountDown;
