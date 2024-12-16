import React, { useState } from 'react';
import { ResultItem } from './style/SearchResultStyle';
import { IconCheckLiked } from '../review/comments/style/CommentStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import DefaultButton from '../common/buttons/DefaultButton';

const SearchResultItem = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log('item');

  return (
    <ResultItem>
      <img className="result__poster-image" src={item.posterUrl} alt="이미지" />
      <div className="result__movie-info">
        <div>
          <span className="text__title bold">{item.title}</span>
          <span>장르</span>
        </div>
        <p>개봉일 : 2000. 00. 00</p>
        <div className="text__man-info">
          <p>감독 : 000</p>
          <p>배우 : 000</p>
        </div>
        <div className="text__score">
          <p>
            <img className="icon" src="/assets/main_GPA.svg" alt="팝콘 스코어 이미지" />
            <span>0점</span>
          </p>
          <p>
            <span className="icon__heart">♥</span>
            <span>000</span>
          </p>
        </div>
      </div>
      <div className="div__buttons">
        <IconCheckLiked $isClicked={isClicked}>
          <FontAwesomeIcon className="icon" icon={isClicked ? heartFilled : heartEmpty} onClick={() => setIsClicked(!isClicked)} />
        </IconCheckLiked>
        <DefaultButton w={4.5} h={1.6} bgColor={colors.space_gray} fontColor={colors.white} name={'상세정보'} />
      </div>
    </ResultItem>
  );
};

export default SearchResultItem;
