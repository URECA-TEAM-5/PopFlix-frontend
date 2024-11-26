import { Container } from '@mui/material';
import WatchListAll from '../../components/watchlist/WatchListAll.jsx';
import WatchListMonth from '../../components/watchlist/WatchListMonth.jsx';

const WatchListPage = () => {
    return (
        <Container className="container">
            <WatchListMonth />
            <WatchListAll />
        </Container>
    )
}
export default WatchListPage;