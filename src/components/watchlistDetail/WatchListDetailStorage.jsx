import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Storage, StorageInfo } from "./style/WatchListDetailStorage";
import WatchListLikeButton from "../watchlist/WatchListLikeButton";
import { useParams } from "react-router-dom";
import { useWatchListDetail } from "../../stores/watchlist/WatchListDetailStore";
import { chkUserInfo } from "../userInfo/modal/chkUserInfo";

const DetailStorage = () => {
    const { id } = useParams();

    const userId = chkUserInfo().userId;
    const { watchListDetail, setWatchListDetail, setIsLiked } = useWatchListDetail();
    const handleCopy = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('링크를 복사했어요. 원하는 곳에 공유하세요!');
        }).catch(err => {
            console.error('복사 실패 ', err);
        });
    };

    const handleLikeToggle = async (storageId) => {
        await setIsLiked(storageId, userId);
        setWatchListDetail(id, userId);
    };

    const storage = watchListDetail?.storage;

    return (
        <>
            {storage && (
                <Storage>
                    <StorageInfo>
                        <img src={storage.storageImage} alt={storage.storageName} />
                        <div>
                            <h4>{storage.storageName}</h4>
                            <p className="regular">{storage.username}</p>
                            <p className="regular">{storage.createAt}</p>
                            <p className="regular">
                                <WatchListLikeButton
                                    isLiked={storage.isLiked}
                                    likeCount={storage.likeCount}
                                    className={storage.isLiked ? 'heartlike' : ''}
                                    onClick={() => handleLikeToggle(storage.id)}
                                />
                                <FontAwesomeIcon
                                    icon={faArrowUpFromBracket}
                                    className="share"
                                    onClick={handleCopy}
                                />
                            </p>
                        </div>
                    </StorageInfo>
                    <div className="contentLine"></div>
                    <div>
                        <FontAwesomeIcon icon={faMicrophone} />
                        <span className="bold"> 소개글</span>
                        <p className="regular overview">{storage.overview}</p>
                    </div>
                    <div className="contentLine"></div>
                </Storage>
            )}
        </>
    );
};

export default DetailStorage;