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
import Loading from '../common/loading/Loading';
import SearchEmptyResult from './SearchEmptyResult';

const SearchResultList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { searchResponse } = useSearch();

  return (
    <>
      {searchResponse !== '' ? (
        <ResultListWrapper className="result-list-wrapper">
          {searchResponse.length > 0 ? (
            searchResponse.map((item, index) => {
              return (
                <ResultItem key={index}>
                  <img className="result__poster-image" src={item.poster_path} alt="이미지" />
                  <div className="result__movie-info">
                    <div>
                      <span className="text__title bold">{item.title}</span>
                      {item.genres.map((data, index) => {
                        return (
                          <span key={index} className="text__genre">
                            #{data.name}
                          </span>
                        );
                      })}
                    </div>
                    <p>개봉일 : {item.release_date}</p>
                    <div className="text__man-info">
                      <p>감독 : {item.directors[0].name}</p>
                      <p>
                        배우 :{' '}
                        {(item.cast.length > 5 ? item.cast.slice(0, 5) : item.cast).map((data, index) => {
                          return (
                            <span key={index + data.name} className="text__cast regular">
                              #{data.name}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                    <div className="text__score">
                      <p>
                        <img className="icon" src="/assets/main_GPA.svg" alt="팝콘 스코어 이미지" />
                        <span>{item.popcorn_average_score}점</span>
                      </p>
                      <p>
                        <span className="icon__heart">♥</span>
                        <span>{item.like_count}</span>
                      </p>
                    </div>
                  </div>
                  <div className="div__buttons">
                    <IconCheckLiked $isClicked={isClicked}>
                      <FontAwesomeIcon className="icon" icon={isClicked ? heartFilled : heartEmpty} onClick={() => setIsClicked(!isClicked)} />
                    </IconCheckLiked>
                    <Link to={`/movieDetail/${item.id}`}>
                      <DefaultButton w={4.5} h={1.6} bgColor={colors.space_gray} fontColor={colors.white} name={'상세정보'} />
                    </Link>
                  </div>
                </ResultItem>
              );
            })
          ) : (
            <>
              <SearchEmptyResult message={'검색된 영화가 없습니다'} />
            </>
          )}
        </ResultListWrapper>
      ) : (
        <Loading message={'영화를 불러오는 중입니다'} />
      )}
    </>
  );
};

export default SearchResultList;
