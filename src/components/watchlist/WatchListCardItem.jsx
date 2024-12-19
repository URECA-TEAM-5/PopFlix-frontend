import { Grid2 } from '@mui/material';
import { CardContentDiv, CardTextDiv, WatchListCard, WatchListCardDiv } from './style/WatchListAll';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import WatchListLikeButton from './WatchListLikeButton';

const WatchListCardItem = ({ data }) => {
    const [liked, setLiked] = useState(data.isLiked);

    const handleClickLike = useCallback((event) => {
        event.preventDefault();
        const updatedLikeStatus = !liked;
        console.log("현재 상태:", liked);
        console.log("변경될 상태:", updatedLikeStatus);
        setLiked(updatedLikeStatus);
    }, [liked]);

    return (
        <WatchListCardDiv key={data.id}>
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
                                <WatchListLikeButton
                                    isLiked={liked}
                                    likeCount={data.likeCount}
                                    className={liked ? 'heartlike' : ''}
                                    onClick={handleClickLike}
                                />
                                <span className="small">{data.isLiked}</span>
                            </div>
                        </CardTextDiv>
                    </CardContentDiv>
                </WatchListCard>
            </Link>
        </WatchListCardDiv>
        // <Grid2 key={data.id}>
        //     <Link to={`/watchlist/${data.id}`}>
        //         <WatchListCard>
        //             <div>
        //                 <img src={data.storageImage} alt={data.storageName} loading="lazy" />
        //             </div>
        //             <CardContentDiv>
        //                 <CardTextDiv className="regular">
        //                     <span>{data.storageName}</span>
        //                     <span className="small">
        //                         {data.username} | {data.movieCount}편
        //                     </span>
        //                     <div className="likeDiv" onClick={handleClickLike}>
        //                         <WatchListLikeButton
        //                             isLiked={liked}
        //                             likeCount={data.likeCount}
        //                             className={liked ? 'heartlike' : ''}
        //                             onClick={handleClickLike}
        //                         />
        //                         <span className="small">{data.isLiked}</span>
        //                     </div>
        //                 </CardTextDiv>
        //             </CardContentDiv>
        //         </WatchListCard>
        //     </Link >
        // </Grid2>
    );
};

export default WatchListCardItem;