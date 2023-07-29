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


const completedMatches = [
    {
        id: 1,
        team1: 'Pakistan',
        team2: 'Sri Lanka',
        result: 'Pakistan won by 30 runs',
        venue: 'Gaddafi Stadium, Lahore',
        date: '2023-10-25T14:00:00Z',
    },
    {
        id: 2,
        team1: 'Bangladesh',
        team2: 'Ireland',
        result: 'Bangladesh won by 7 wickets',
        venue: 'Zahur Ahmed Chowdhury Stadium, Chattogram',
        date: '2023-10-26T14:00:00Z',
    },
    // Add more completed matches data here
];

export default function CompletedMatches() {
    return (
        <>
            <Table width="auto" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="center">Match and Venue</StyledTableCell>
                        <StyledTableCell align="right">Result&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {completedMatches.map((match) => (
                        <StyledTableRow key={match.id}>
                            <StyledTableCell component="th" scope="row">
                                {new Date(match.date).toDateString()}
                            </StyledTableCell>
                            <StyledTableCell align="center">{match.team1} vs {match.team2}<br></br>{match.venue}</StyledTableCell>
                            <StyledTableCell align="right">{match.result}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}