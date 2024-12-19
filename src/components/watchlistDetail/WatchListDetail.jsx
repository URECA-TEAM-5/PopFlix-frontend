import { useParams } from 'react-router-dom';
import DetailOtherStorage from './WatchListDetailOtherStorage';
import DetailStorage from './WatchListDetailStorage';
import DetailMovieList from './WatchListDetailMovieList';
import { useEffect, useRef } from 'react';
import { OpacityDiv } from './style/WatchListDetail';
import { useWatchListDetail } from '../../stores/watchlist/WatchListDetailStore';
import { chkUserInfo } from '../userInfo/modal/chkUserInfo';

const WatchListDetail = () => {
    const { id } = useParams();

    const { watchListDetail, setWatchListDetail, setOtherStorage } = useWatchListDetail();
    const isLoaded = useRef(false);

    const userId = chkUserInfo().userId;

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