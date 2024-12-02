import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const WatchListLikeButton = ({ isLiked, likeCount, onClick, className }) => {
    return (
        <>
            <FontAwesomeIcon
                icon={isLiked ? solidHeart : regularHeart}
                onClick={onClick}
                className={className}
            />
            <span> {likeCount}</span>
        </>
    );
};

export default WatchListLikeButton;