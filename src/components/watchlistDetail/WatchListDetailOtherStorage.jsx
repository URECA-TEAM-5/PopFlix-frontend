import { useParams } from "react-router-dom";
import { useWatchListDetail } from "../../stores/watchlist/WatchListDetailStore";
import WatchListLikeButton from "../watchlist/WatchListLikeButton";
import { OtherList } from "./style/WatchListDetailOtherStorage";

const DetailOtherStorage = () => {
    const { id } = useParams();

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;
    const { otherStorage, watchListDetail, setOtherStorage, setIsLiked } = useWatchListDetail();

    const handleOtherLikeToggle = async (storageId) => {
        await setIsLiked(storageId, userId);
        setOtherStorage(id, userId);
    };
    return (
        <OtherList>
            {watchListDetail?.storage?.username && (
                <h4>{watchListDetail.storage.username}님의 다른 WatchList</h4>
            )}
            {otherStorage.length > 0 ? (
                <>
                    <div className="imageContainer">
                        {otherStorage.map((item) => (
                            <div key={item.id} className="imageWrapper">
                                {item.storageImage ? (
                                    <img
                                        src={item.storageImage}
                                        alt={item.storageName}
                                        loading="lazy"
                                        className="image"
                                    />
                                ) : (
                                    <div className="imagePlaceholder"></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="textContainer">
                        {otherStorage.map((item, index) => (
                            <div key={index}>
                                <p className="title regular">{item.storageName}</p>
                                <div className="count regular">
                                    <span>{item.movieCount}</span>
                                    <span>편</span>
                                    <div className="likeCount">
                                        <WatchListLikeButton
                                            isLiked={item.isLiked}
                                            likeCount={item.likeCount}
                                            className={item.isLiked ? 'heartlike' : ''}
                                            onClick={() => handleOtherLikeToggle(item.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>다른 WatchList가 없습니다.</p>
            )}
        </OtherList>
    );
};

export default DetailOtherStorage;