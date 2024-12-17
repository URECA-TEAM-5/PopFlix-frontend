import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { HeaderContainer } from './style/PhotoReviewStyle';
import { IconCheckLiked } from '../comments/style/CommentStyle';
import { useNavigate } from 'react-router-dom';

const ReviewHeader = ({ title, subTitle, handleLike }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div className="inner__section">
        <FontAwesomeIcon className="icon" icon={faAngleLeft} onClick={() => navigate(-1)} />
        <div className="text__message">
          <p className="text__header_title">{title}</p>
          <span className="text__movie_title regular">{subTitle}</span>
        </div>
        <IconCheckLiked $isClicked={isClicked}>
          <FontAwesomeIcon className="icon" icon={isClicked ? heartFilled : heartEmpty} onClick={() => setIsClicked(!isClicked)} />
        </IconCheckLiked>
      </div>
    </HeaderContainer>
  );
};

export default ReviewHeader;
