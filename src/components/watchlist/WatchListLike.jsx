import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { Heart } from './style/WatchListAll';
import { useState } from 'react';

const WatchListLike = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked(prevState => !prevState);
    };

    return (
        <Heart onClick={handleClick} $isLiked={isLiked}>
            <FontAwesomeIcon
                icon={isLiked ? solidHeart : regularHeart}
                className="small"
            />
        </Heart>
    );
};

export default WatchListLike;