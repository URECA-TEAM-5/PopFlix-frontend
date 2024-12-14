import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import DetailOtherStorage from './WatchListDetailOtherStorage';
import DetailStorage from './WatchListDetailStorage';
import DetailMovieList from './WatchListDetailMovieList';
import { useWatchList } from '../../stores/watchlist/WatchListDetailStore';
import { fetchDetailData, fetchOtherStorage } from '../../api/watchlistDetail/watchlistDetail';

const WatchListDetail = () => {
    const { id } = useParams();
    const { watchListDetail, setwatchListDetail, otherStorage, setOtherStorage, setIsLiked } = useWatchList();

    const { data: detailData } = useQuery(
        {
            queryKey: ['detailData', id],
            queryFn: () => fetchDetailData({ queryKey: ['detailData', id] }),
            enabled: !watchListDetail,
            onSuccess: (data) => {
                if (data) {
                    setwatchListDetail(id);
                }
            },
        }
    );

    const { data: otherData } = useQuery({
        queryKey: ['otherData'],
        queryFn: fetchOtherStorage,
        enabled: !otherStorage,
        onSuccess: (data) => {
            if (data) {
                setOtherStorage();
            }
        },
    });

    const handleClickLike = (id, state, dataType) => {
        if (dataType === 'detail') {
            setIsLiked(id, state, 'detail');
        } else if (dataType === 'other') {
            setIsLiked(id, state, 'other');
        }
    };

    return (
        <>
            {detailData?.storage && (
                <DetailStorage
                    storage={detailData.storage}
                    handleClickLike={(state) => handleClickLike(detailData.storage.id, state, 'detail')}
                />
            )}
            <DetailMovieList movies={detailData?.movies} />
            <DetailOtherStorage
                otherData={otherData}
                username={detailData?.storage?.username}
                handleClickLike={handleClickLike}
            />
        </>
    );
};

export default WatchListDetail;