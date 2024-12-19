import { useParams } from "react-router-dom";
import { useWatchListDetail } from "../../stores/watchlist/WatchListDetailStore";
import WatchListLikeButton from "../watchlist/WatchListLikeButton";
import { OtherList } from "./style/WatchListDetailOtherStorage";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EmptyResult from "../common/emptyResult/EmptyResult";
import { chkUserInfo } from "../userInfo/modal/chkUserInfo";

const DetailOtherStorage = () => {
    const { id } = useParams();
    const userId = chkUserInfo().userId;
    const { otherStorage, watchListDetail, setOtherStorage, setIsLiked } = useWatchListDetail();

    const handleOtherLikeToggle = async (storageId) => {
        await setIsLiked(storageId, userId);
        setOtherStorage(id, userId);
    };

    const getSliderSettings = () => {
        const itemsCount = otherStorage.length
        if (itemsCount > 5) {
            return {
                dots: true,
                infinite: false,
                speed: 700,
                slidesToShow: 5,
                slidesToScroll: 2,
            };
        } else {
            return {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: itemsCount,
                slidesToScroll: 1,
                variableWidth: true,
            };
        }
    };

    return (
        <OtherList>
            {watchListDetail?.storage?.username && (
                <h4>{watchListDetail.storage.username}님의 다른 WatchList</h4>
            )}
            {otherStorage.length > 0 ? (
                <Slider {...getSliderSettings()} className="carousel">
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
                            <div className="textWrapper">
                                <p className="title regular">{item.storageName}</p>
                                <div className="count regular">
                                    <div>
                                        <span>{item.movieCount}</span>
                                        <span>편</span>
                                    </div>
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
                        </div>
                    ))}
                </Slider>
            ) : (
                <EmptyResult
                    message="해당 유저가 작성한 다른 WatchList는 없습니다."
                    size="4"
                    p="1"
                    fontSize="1.1"
                />
            )}
        </OtherList>
    );
};

export default DetailOtherStorage;