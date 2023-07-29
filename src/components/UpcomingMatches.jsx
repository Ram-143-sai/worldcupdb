import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const upcomingMatches = [
    {
        id: 1,
        team1: 'India',
        team2: 'Australia',
        date: '2023-10-25T14:00:00Z',
        venue: 'Wankhede Stadium, Mumbai',
    },
    {
        id: 2,
        team1: 'England',
        team2: 'New Zealand',
        date: '2023-10-26T10:30:00Z',
        venue: 'Lord\'s Cricket Ground, London',
    },
    // Add more upcoming matches data here
];


export default function UpcomingMatches() {
    return (
        <>
            <Table width="auto" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="center">Match and Venue</StyledTableCell>
                        <StyledTableCell align="right">Time&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {upcomingMatches.map((match) => (
                        <StyledTableRow key={match.id}>
                            <StyledTableCell component="th" scope="row">
                                {new Date(match.date).toDateString()}
                            </StyledTableCell>
                            <StyledTableCell align="center">{match.team1} vs {match.team2}<br></br>{match.venue}</StyledTableCell>
                            <StyledTableCell align="right">{new Date(match.date).toLocaleString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}