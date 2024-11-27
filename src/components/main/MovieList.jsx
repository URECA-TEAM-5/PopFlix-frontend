import React, { useState, useEffect, useRef } from 'react';
import { genres,moviesData } from './data';
import styles from './style/MovieList.module.css'; 
import mainGPA from '/assets/main_GPA.svg';
import heart from '/assets/heart.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const MovieList = () => {
  const [movies, setMovies] = useState([]); // 영화 데이터 상태
  const [page, setPage] = useState(1); // 페이지 번호
  const [moviesPerPage] = useState(8); // 한 페이지에 보여줄 영화 개수
  const [selectedGenre, setSelectedGenre] = useState('All'); // 선택된 장르
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const settings = useRef({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  })
  

  useEffect(() => {
    // 선택된 장르에 맞는 영화 데이터를 필터링하여 표시
    if (selectedGenre === 'All') {
      setMovies(moviesData);
    } else {
      setMovies(moviesData.filter((movie) => movie.genre === selectedGenre));
    }
  }, [selectedGenre]);

  // 페이지네이션 처리
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // 페이지 변경 함수
  const paginate = (pageNumber) => setPage(pageNumber);

  
  return (
    <div>
      {/* 장르 버튼 */}
      <div id="genre-buttons-container" className={styles.genreButtonsContainer}>
        <Slider {...settings.current}>
          <button className={`${styles.genreButton} ${selectedGenre === 'All' ? styles.genreButtonSelected : ''}`} onClick={() => setSelectedGenre('All')}>
            전체
          </button>
          {genres.map((genre, index) => (
            <button
              key={index}
              className={`${styles.genreButton} ${selectedGenre === genre ? styles.genreButtonSelected : ''}`}
              onClick={() => {
                setSelectedGenre(genre);
                setPage(1);
              }}
            >
              {genre}
            </button>
          ))}
        </Slider>
      </div>

      {/* 영화 리스트 */}
      <div className={styles.movieGrid}>
        {currentMovies.map((movie, index) => (
          <div key={index} className={styles.movieCard}>
            <img className={styles.movieImage} src={movie.imageUrl} alt={movie.title} />
            <h4 className={styles.movieTitle}>{movie.title}</h4>
            <div className={styles.movieStats}>
              {/* 평점 아이콘과 평점 텍스트 */}
              <div className={styles.movieRating}>
                <img className={styles.movieIcon} src={mainGPA} alt="평점" />
                <p>{movie.rating}</p>
              </div>
              {/* 좋아요 아이콘과 좋아요 텍스트 */}
              <div className={styles.movieLikes}>
                <img className={styles.movieIcon} src={heart} alt="좋아요" />
                <p>{movie.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      {movies.length > moviesPerPage && (
        <div className={styles.moviePage}>
          {[...Array(Math.ceil(movies.length / moviesPerPage))].map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* 로딩 상태 */}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default MovieList;
