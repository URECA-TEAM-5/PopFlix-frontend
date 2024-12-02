import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Storage, StorageInfo } from "./style/DetailStorage";
import WatchListLikeButton from "./WatchListLikeButton";

const DetailStorage = ({ storage, handleClickLike, handleCopy }) => {
    return (
        <>
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
                                onClick={handleClickLike}
                            />
                            <FontAwesomeIcon
                                icon={faArrowUpFromBracket}
                                className="share"
                                onClick={handleCopy}
                            />
                        </p>
                    </div>
                </StorageInfo>
                <div className="content__line"></div>
                <div>
                    <FontAwesomeIcon icon={faMicrophone} />
                    <span className="bold"> 소개글</span>
                    <p className="regular overview">{storage.overview}</p>
                </div>
                <div className="content__line"></div>
            </Storage>
        </>
    );
};

export default DetailStorage;