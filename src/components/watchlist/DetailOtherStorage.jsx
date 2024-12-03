import WatchListLikeButton from "./WatchListLikeButton";
import { OtherList } from "./style/DetailOtherStorage";
import { useCallback, useState } from "react";

const DetailOtherStorage = ({ otherStorage = [], username }) => {
    const [likedItems, setLikedItems] = useState(
        otherStorage.map(() => false)
    );

    const handleClick = useCallback((index) => {
        setLikedItems(prevState => {
            const newLikedItems = [...prevState];
            newLikedItems[index] = !newLikedItems[index];
            return newLikedItems;
        });
    });

    return (
        <OtherList>
            {username && <h4>{username}님의 다른 WatchList</h4>}
            {otherStorage.length > 0 ? (
                <>
                    <div className="image-container">
                        {otherStorage.map((item, index) => (
                            <img
                                key={index}
                                src={item.storageImage}
                                alt={item.storageName}
                                loading="lazy"
                            />
                        ))}
                    </div>
                    <div className="text-container">
                        {otherStorage.map((item, index) => (
                            <div key={index}>
                                <p className="title regular">{item.storageName}</p>
                                <div className="count regular">
                                    <span>{item.movieCount}</span>
                                    <span>편</span>
                                    <div className="like__count">
                                        <WatchListLikeButton
                                            isLiked={likedItems[index]}
                                            likeCount={item.likeCount}
                                            className={likedItems[index] ? 'heartlike' : ''}
                                            onClick={() => handleClick(index)}
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