import { Grid2 } from "@mui/material";
import { CardContentDiv, CardTextDiv, WatchListCard } from "./style/WatchListAll";
import WatchListLike from "./WatchListLike";

const WatchListCardItem = ({ data }) => {
    return (
        <Grid2 key={data.storage_id}>
            <WatchListCard>
                <div>
                    <img src={data.movie_image} alt={data.storage_name} loading="lazy" />
                </div>
                <CardContentDiv>
                    <CardTextDiv className="regular">
                        <span>{data.storage_name}</span>
                        <span className="small">
                            {data.user_nickname} | {data.movies}편
                        </span>
                        <div className="likeDiv">
                            <WatchListLike />
                            <span className="small">{data.like}</span>
                        </div>
                    </CardTextDiv>
                </CardContentDiv>
            </WatchListCard>
        </Grid2>
    );
};

export default WatchListCardItem;