import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid, Button } from '@mui/material';


const FilterComponent = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>

            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleSortChange}
                >
                    <Grid container spacing={16} justifyContent="space-between" >
                        <Grid item><Button >Add Filters</Button></Grid>
                        <Grid item><FormControlLabel value="sortByDate" control={<Radio />} label="sort By Date" /></Grid>
                        <Grid item><FormControlLabel value="sortByTeams" control={<Radio />} label="sortByTeams" /></Grid>
                        <Grid item><FormControlLabel value="sortByVenues" control={<Radio />} label="sortByVenues" /></Grid>
                    </Grid>
                </RadioGroup>
            </FormControl>
        </div>

    )
}
export default FilterComponent