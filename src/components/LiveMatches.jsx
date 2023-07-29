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

const liveMatch = [{
    id: '1',
    team1: 'South Africa',
    team2: 'West Indies',
    score: '120/3 (20 overs)',
    overs: 'Ongoing',
    venue: 'Kingsmead, Durban',
}];

export default function LiveMatches() {
    return (
        <>
            <Table width="auto" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Score</StyledTableCell>
                        <StyledTableCell align="center">Match and Venue</StyledTableCell>
                        <StyledTableCell align="right">Overs</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {liveMatch.map((match) => (
                        <StyledTableRow key={match.id}>
                            <StyledTableCell component="th" scope="row">
                                {match.score}
                            </StyledTableCell>
                            <StyledTableCell align="center">{match.team1} vs {match.team2}<br></br>{match.venue}</StyledTableCell>
                            <StyledTableCell align="right">{match.overs}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}