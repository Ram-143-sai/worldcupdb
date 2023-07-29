import Header from './Header'
import Timer from './Timer'
import Dashboard from './Dashboard'
import { CssBaseline } from '@mui/material';
// import theme from './theme';

function HomePage() {
    return (
        <>
            <Header></Header>
            <br />
            <br />
            <>
                <CssBaseline />
                <Timer />
            </>
            <br />
            <br />
            <Dashboard></Dashboard>
        </>
    )
};

export default HomePage