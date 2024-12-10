import WatchListLikeButton from "./WatchListLikeButton";
import { OtherList } from "./style/DetailOtherStorage";

const DetailOtherStorage = ({ otherData = [], username, handleClickLike }) => {

    return (
        <OtherList>
            {username && <h4>{username}님의 다른 WatchList</h4>}
            {otherData.length > 0 ? (
                <>
                    <div className="imageContainer">
                        {otherData.map((item, index) => (
                            <img
                                key={index}
                                src={item.storageImage}
                                alt={item.storageName}
                                loading="lazy"
                            />
                        ))}
                    </div>
                    <div className="textContainer">
                        {otherData.map((item, index) => (
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
                                            onClick={() => handleClickLike(item.id, !item.isLiked ? 'like' : 'unlike', 'other')}
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