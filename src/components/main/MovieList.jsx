import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { genres, moviesData } from './data';
import styles from './style/MovieList.module.css';
import mainGPA from '/assets/main_GPA.svg';
import heart from '/assets/heart.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid2 from '@mui/material/Grid2'; // Grid2 import

const MovieList = () => {
  const [movies, setMovies] = useState([]); // 영화 데이터 상태
  const [page, setPage] = useState(1); // 페이지 번호
  const [moviesPerPage] = useState(8); // 한 페이지에 보여줄 영화 개수
  const [selectedGenre, setSelectedGenre] = useState('All'); // 선택된 장르
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const navigate = useNavigate();
  const settings = useRef({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

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

  const handleMovieDetail = (id) => {
    navigate(`/movieDetail/${id}`);
  };

  return (
    <div className={styles.container}>
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
        <Grid2 container spacing={2} justifyContent="center">
          {currentMovies.map((movie) => (
            <Grid2 xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <div className={styles.movieCard}>
                <img className={styles.movieImage} src={movie.imageUrl} alt={movie.title} onClick={() => handleMovieDetail(movie.id)} />
                <h4 className={styles.movieTitle}>{movie.title}</h4>
                <div className={styles.movieStats}>
                  <div className={styles.movieRating}>
                    <img className={styles.movieIcon} src={mainGPA} alt="평점" />
                    <p>{movie.rating}</p>
                  </div>
                  <div className={styles.movieLikes}>
                    <img className={styles.movieIcon} src={heart} alt="좋아요" />
                    <p>{movie.likes}</p>
                  </div>
                </div>
              </div>
            </Grid2>
          ))}
        </Grid2>
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
      <button className={styles.viewMoreBtn}>더 보기</button>

      {/* 로딩 상태 */}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default MovieList;
