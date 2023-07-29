import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

const FiltersComponent = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.name, event.target.value);
    };

    return (
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
                <TextField
                    select
                    name="sortByDate"
                    label="Sort by Date"

                    onChange={handleSortChange}
                    defaultValue=""
                    style={{
                        width: 300
                    }}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="ascending">Ascending</MenuItem>
                    <MenuItem value="descending">Descending</MenuItem>
                </TextField>
            </Grid>
            <Grid item>
                <TextField
                    select
                    name="sortByTeams"
                    label="Sort by Teams"
                    onChange={handleSortChange}
                    defaultValue=""
                    style={{
                        width: 300
                    }}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="alphabetical">Alphabetical</MenuItem>
                </TextField>
            </Grid>
            <Grid item>
                <TextField
                    select
                    name="sortByVenues"
                    label="Sort by Venues"
                    onChange={handleSortChange}
                    defaultValue=""
                    style={{
                        width: 300
                    }}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="alphabetical">Alphabetical</MenuItem>
                </TextField>
            </Grid>
        </Grid>
    );
};

export default FiltersComponent;
