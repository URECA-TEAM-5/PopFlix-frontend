import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { HeaderContainer } from './style/PhotoReviewStyle';

const ReviewHeader = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <HeaderContainer>
      <div className="inner__section">
        <FontAwesomeIcon className="icon" icon={faAngleLeft} />
        <div className="text__message">
          <p className="text__header_title">리뷰</p>
          <span className="text__movie_title regular">비트박스</span>
        </div>
        <FontAwesomeIcon className="icon" icon={isClicked ? heartFilled : heartEmpty} onClick={() => setIsClicked(!isClicked)} />
      </div>
    </HeaderContainer>
  );
};

export default ReviewHeader;
