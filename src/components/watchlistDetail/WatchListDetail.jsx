import { useParams } from 'react-router-dom';
import DetailOtherStorage from './WatchListDetailOtherStorage';
import DetailStorage from './WatchListDetailStorage';
import DetailMovieList from './WatchListDetailMovieList';
import { useEffect, useRef } from 'react';
import { OpacityDiv } from './style/WatchListDetail';
import { useWatchListDetail } from '../../stores/watchlist/WatchListDetailStore';

const WatchListDetail = () => {
    const { id } = useParams();

    const { watchListDetail, setWatchListDetail, setOtherStorage } = useWatchListDetail();
    const isLoaded = useRef(false);

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    useEffect(() => {
        if (!isLoaded.current) {
            isLoaded.current = true;
            setWatchListDetail(id, userId);
            setOtherStorage(id, userId);
        }
    }, [id, userId, setWatchListDetail, setOtherStorage]);

    return (
        <OpacityDiv>
            {watchListDetail?.storage && (
                <DetailStorage />
            )}
            <DetailMovieList />
            <DetailOtherStorage />
        </OpacityDiv>
    );
};

export default WatchListDetail;