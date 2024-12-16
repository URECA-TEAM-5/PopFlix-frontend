import React, { useState } from 'react';
import { ResultItem, ResultListWrapper } from './style/SearchResultStyle';
import { useSearch } from '../../stores/search/useSearch';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { IconCheckLiked } from '../review/comments/style/CommentStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultButton from '../common/buttons/DefaultButton';
import { colors } from '../../global/globalStyle';
import { Link } from 'react-router-dom';

const SearchResultList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { searchResponse } = useSearch();

  return (
    <>
      {searchResponse !== '' ? (
        <ResultListWrapper className="result-list-wrapper">
          {searchResponse.map((item, index) => {
            return (
              <ResultItem key={index}>
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
                      <span>{item.popcornScore}점</span>
                    </p>
                    <p>
                      <span className="icon__heart">♥</span>
                      <span>{item.likeCount}</span>
                    </p>
                  </div>
                </div>
                <div className="div__buttons">
                  <IconCheckLiked $isClicked={isClicked}>
                    <FontAwesomeIcon className="icon" icon={isClicked ? heartFilled : heartEmpty} onClick={() => setIsClicked(!isClicked)} />
                  </IconCheckLiked>
                  <Link to={`/movieDetail/${item.movieId}`}>
                    <DefaultButton w={4.5} h={1.6} bgColor={colors.space_gray} fontColor={colors.white} name={'상세정보'} />
                  </Link>
                </div>
              </ResultItem>
            );
          })}
        </ResultListWrapper>
      ) : (
        <h1>is Loading</h1>
      )}
    </>
  );
};

export default SearchResultList;
