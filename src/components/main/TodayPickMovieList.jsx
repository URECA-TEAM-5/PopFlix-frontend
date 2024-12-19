import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style/TodayPickMovieList.module.css';
import { getMovieList } from '../../api/movieList/movieList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
const Wrapper = styled.div`
    
    .slick-track {
        display: flex;
        gap: 0.625rem;
    }
  `
const TodayPickMovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  
  // 영화 데이터를 가져오는 함수
  const fetchMovies = async () => {
    try {
      const response = await getMovieList(0, 10, '', 'popular');
      console.log('영화 리스트 10개: ', response.response);
      setMovieData(response.response.content);
      setIsLoading(false);
    } catch (error) {
      console.error('영화 데이터를 가져오는 데 실패했습니다:', error);
    }
  };

  // 컴포넌트가 마운트될 때 영화 데이터를 한번만 가져오도록 설정
  useEffect(() => {
    if (isLoading) {
      fetchMovies();
    }
  }, [isLoading]);

  // 슬라이더 설정
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    gap: 5,
  };
  const handleMovieDetail = (id) => {
    navigate(`/movieDetail/${id}`);
  };
  return (
    <div className={styles.container}>
      <p className={styles.p}>오늘은 이 콘텐츠 어때요?</p>
      <div className={styles.todayPickMovieList}>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : (
            <Wrapper>
 <Slider {...sliderSettings} className={styles.slideContainer}>
            {movieData.map((item,index) => (
              <div key={index} className={styles.todayPickMovieCard} onClick={() => handleMovieDetail(item.movieId)}>
                <img
                  src={item.posterUrl}
                  alt={item.title} // 이미지의 alt 속성 추가
                  className={styles.todayPickMovieCardImage}
                />
                <div className={styles.todayPickRank}>
                  <p>{item.movieId}</p>
                </div>
              </div>
            ))}
          </Slider>
            </Wrapper>
         
        )}
      </div>
    </div>
  );
};

export default TodayPickMovieList;
