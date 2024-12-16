import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { genres, moviesData } from './data';
import styles from './style/MovieList.module.css';
import mainGPA from '/assets/main_GPA.svg';
import heart from '/assets/heart.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getMovieList } from '../../api/movieList/movieList';

const MovieList = ({ rows = 2, columns = 4, showMoreButton = true }) => {
  const [movies, setMovies] = useState([]); // 전체 영화 리스트
  const [filteredMovies, setFilteredMovies] = useState([]); // 선택된 장르에 따른 영화 리스트
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [pageGroup, setPageGroup] = useState(0); // 페이지 그룹 (5개씩 묶어 보여주기)
  const [pageNumbers, setPageNumbers] = useState([]); // 페이지 번호 리스트
  const [movieApiPage, setMovieApiPage] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);
  const navigate = useNavigate();
  const size = 200;

  const moviesPerPage = rows * columns; // 한 번에 보여줄 영화 개수
  const pagesToShow = 5; // 한 번에 표시할 페이지 번호 개수 (5개씩)

  const settings = useRef({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

  const fetchMovies = async (genre) => {
    try {
      // API 요청에서 장르와 페이지를 전달
      const response = await getMovieList(movieApiPage, size, genre);
      console.log('영화 데이터 : ', response.response);
      console.log('총 영화 개수 : ', response.response.totalElements);
  
      // 상태 업데이트
      setTotalMovies(response.response.totalElements);
      setMovies(response.response.content);
      setFilteredMovies(response.response.content);
      setPage(1); // 페이지 초기화
      setPageGroup(0); // 페이지 그룹 초기화
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };
  
  // 장르 버튼 클릭 이벤트 핸들러
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    console.log('선택된 장르 : ',genre);
    setMovieApiPage(0); // API 페이지 초기화
    fetchMovies(genre); // 선택한 장르로 영화 데이터 가져오기
  };
  useEffect(() => {
    fetchMovies(); // 초기 데이터 가져오기
  }, []);
  

  useEffect(() => {
    // 페이지 번호를 새로 계산
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    const startPage = pageGroup * pagesToShow + 1;
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    const pageNumbersArray = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    setPageNumbers(pageNumbersArray); 
  }, [filteredMovies, pageGroup]); 

  // 현재 페이지에 표시할 영화 계산
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // 페이지 변경 처리
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    if (pageNumber > pageNumbers[pageNumbers.length - 1]) {
      setPageGroup(pageGroup + 1);
    } else if (pageNumber < pageNumbers[0]) {
      setPageGroup(pageGroup - 1);
    }
  };

  const handleNextGroup = () => {
    setPageGroup(pageGroup + 1);
    setPage(pageNumbers[pageNumbers.length - 1] + 1);
  };

  const handlePrevGroup = () => {
    setPageGroup(pageGroup - 1);
    setPage(pageNumbers[pageNumbers.length - 1] - 9);
  };

  const handleMovieDetail = (id) => {
    navigate(`/movieDetail/${id}`);
  };

  const handleMoreMovies = () => {
    navigate('/movieList'); // 영화 리스트 페이지로 이동
  };

  return (
    <div className={styles.container}>
      {/* 장르 버튼 */}
      <div id="genre-buttons-container" className={styles.genreButtonsContainer}>
        <Slider {...settings.current}>
          <button className={`${styles.genreButton} ${selectedGenre === 'All' ? styles.genreButtonSelected : ''}`}  onClick={() => handleGenreChange('All')}>
            전체
          </button>
          {genres.map((genre, index) => (
            <button
              key={index}
              className={`${styles.genreButton} ${selectedGenre === genre ? styles.genreButtonSelected : ''}`}
              onClick={() => handleGenreChange(genre)}
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
            <div className={styles.movieCard} key={movie.movieId}>
              <img className={styles.movieImage} src={movie.posterUrl} alt={movie.title} onClick={() => handleMovieDetail(movie.movieId)} />
              <h4 className={styles.movieTitle}>{movie.title}</h4>
              <div className={styles.movieStats}>
                <div className={styles.movieRating}>
                  <img className={styles.movieIcon} src={mainGPA} alt="평점" />
                  <p>{movie.popcornScore}</p>
                </div>
                <div className={styles.movieLikes}>
                  <img className={styles.movieIcon} src={heart} alt="좋아요" />
                  <p>{movie.likeCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 페이지네이션 */}
      {filteredMovies.length > moviesPerPage && (
        <div className={styles.moviePage}>
          {/* 이전 그룹 버튼 */}
          {pageGroup > 0 && (
            <button className={styles.pageButton} onClick={handlePrevGroup}>
              이전
            </button>
          )}

          {/* 페이지 번호들 */}
          {pageNumbers.map((number) => (
            <button key={number} className={`${styles.pageButton} ${page === number ? styles.activePageButton : ''}`} onClick={() => handlePageChange(number)}>
              {number}
            </button>
          ))}

          {/* 다음 그룹 버튼 */}
          {pageGroup * pagesToShow + pagesToShow < Math.ceil(filteredMovies.length / moviesPerPage) && (
            <button className={styles.pageButton} onClick={handleNextGroup}>
              다음
            </button>
          )}
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
