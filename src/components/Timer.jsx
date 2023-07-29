import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';

const NextWorldCupMatchDate = '2023-08-01T00:00:00Z'; // Replace this with the actual date and time of the World Cup match

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const worldCupDate = new Date(NextWorldCupMatchDate);
      const diff = worldCupDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Countdown for next match of 2023 World Cup
        </Typography>
        <Typography variant="h5">
          {timeRemaining}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Timer;
