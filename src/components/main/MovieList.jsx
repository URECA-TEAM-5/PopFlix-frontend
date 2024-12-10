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
import Grid2 from '@mui/material/Grid2'; // MUI Grid

const MovieList = ({ rows = 2, columns = 4, showMoreButton = true }) => {
  const [movies, setMovies] = useState([]); // 전체 영화 리스트
  const [filteredMovies, setFilteredMovies] = useState([]); // 선택된 장르에 따른 영화 리스트
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const [selectedGenre, setSelectedGenre] = useState('All');
  const navigate = useNavigate();

  const moviesPerPage = rows * columns; // 한 번에 보여줄 영화 개수

  const settings = useRef({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

  useEffect(() => {
    // 전체 영화 리스트를 로드
    setMovies(moviesData);
  }, []);

  useEffect(() => {
    // 선택된 장르에 맞게 영화 리스트 필터링
    const filtered =
      selectedGenre === 'All'
        ? movies
        : movies.filter((movie) => movie.genre === selectedGenre);
    setFilteredMovies(filtered);
    setPage(1); // 장르 변경 시 페이지 초기화
  }, [selectedGenre, movies]);

  // 현재 페이지에 표시할 영화 계산
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handleMovieDetail = (id) => {
    navigate(`/movieDetail/${id}`);
  };

  const handleMoreMovies = () => {
    navigate('/movieList'); // 영화 리스트 페이지로 이동
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
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
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </Slider>
      </div>

      {/* 영화 리스트 */}
      <div className={styles.movieGridContainer}>
      <div className={styles.movieGrid}>
        
        {currentMovies.map((movie) => (
          
            <div className={styles.movieCard}>
              <img
                className={styles.movieImage}
                src={movie.imageUrl}
                alt={movie.title}
                onClick={() => handleMovieDetail(movie.id)}
              />
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
        
        ))}
     
    </div>
      </div>
     

      {/* 페이지네이션 */}
      {filteredMovies.length > moviesPerPage && (
        <div className={styles.moviePage}>
          {[...Array(Math.ceil(filteredMovies.length / moviesPerPage))].map((_, index) => (
            <button
              key={index}
              className={`${styles.pageButton} ${page === index + 1 ? styles.activePageButton : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* 더 보기 버튼 */}
      {showMoreButton && (
        <button className={styles.viewMoreBtn} onClick={handleMoreMovies}>
          더 보기
        </button>
      )}
    </div>
  );
};

export default MovieList;
