import React from 'react';
import { Container, Typography } from '@mui/material';
import CompletedMatches from './CompletedMatches';
import LiveMatches from './LiveMatches';
import UpcomingMatches from './UpcomingMatches';

const Dashboard = () => {

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                World Cup 2023 Dashboard
            </Typography>

            <br />
            <br />

            {/* Live Matches */}
            <Typography variant="h5" gutterBottom>Live Matches</Typography>
            <LiveMatches></LiveMatches>

            <br />
            <br />

            {/* Upcoming Matches */}
            <div>
                <Typography variant="h5" gutterBottom>Upcoming Matches</Typography>
                <UpcomingMatches></UpcomingMatches>
            </div>

            <br />
            <br />

            {/* Completed Matches */}
            <Typography variant="h5" gutterBottom>Completed Matches</Typography>
            <CompletedMatches></CompletedMatches>
        </Container>
    );
};

export default Dashboard;
