import { Container } from '@mui/material';
import WatchListAll from '../../components/watchlist/WatchListAll.jsx';
import WatchListMonth from '../../components/watchlist/WatchListMonth.jsx';
import { WatchListBanner } from './style/WatchListPage.js';

const WatchListPage = () => {
    return (
        <Container>
            <WatchListBanner src="/assets/watchlist_banner.svg" alt="WatchList Banner" />
            <WatchListMonth />
            <WatchListAll />
        </Container>
    )
}
export default WatchListPage;