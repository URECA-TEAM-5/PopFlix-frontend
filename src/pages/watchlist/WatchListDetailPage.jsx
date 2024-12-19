import { Container } from '@mui/material';
import { BackIcon } from './style/WatchListDetailPage';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import WatchListDetail from '../../components/watchlistDetail/WatchListDetail';

const WatchListDetailPage = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate(-1);
    }
    return (
        <Container>
            <BackIcon>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="point"
                    onClick={handleClickBack}
                />
            </BackIcon>
            <WatchListDetail />
        </Container>
    )
}
export default WatchListDetailPage;