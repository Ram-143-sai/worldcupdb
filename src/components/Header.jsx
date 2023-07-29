import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{
                justifyContent: 'space-around'
            }}>
                <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
                    World Cup 2023 Dashboard
                </Typography>

                <Button component={Link} to="/schedule" color="inherit" >
                    Schedule
                </Button>
                {/* <Button component={Link} to="/dashboard" color="inherit" style={{ marginLeft: 'auto' }}>
          Dashboard
        </Button> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
