import { Grid2 } from '@mui/material';
import { CardContentDiv, CardTextDiv, WatchListCard } from './style/WatchListAll';
import WatchListLike from './WatchListLike';
import { Link } from 'react-router-dom';

const WatchListCardItem = ({ data }) => {
    const handleClickLike = (event) => {
        event.preventDefault();
    };
    return (
        <Grid2 key={data.id}>
            <Link to={`/watchlist/${data.id}`}>
                <WatchListCard>
                    <div>
                        <img src={data.storageImage} alt={data.storageName} loading="lazy" />
                    </div>
                    <CardContentDiv>
                        <CardTextDiv className="regular">
                            <span>{data.storageName}</span>
                            <span className="small">
                                {data.username} | {data.movieCount}편
                            </span>
                            <div className="likeDiv" onClick={handleClickLike}>
                                <WatchListLike />
                                <span className="small">{data.isLiked}</span>
                            </div>
                        </CardTextDiv>
                    </CardContentDiv>
                </WatchListCard>
            </Link >
        </Grid2>
    );
};

export default WatchListCardItem;