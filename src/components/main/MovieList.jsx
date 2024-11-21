import React, { useState, useEffect } from 'react';
import styles from './MovieList.module.css'; // CSS 모듈 가져오기
import mainGPA from '/assets/main_GPA.svg';
import heart from '/assets/heart.svg';
const MovieList = () => {
  const [movies, setMovies] = useState([]); // 영화 데이터 상태
  const [page, setPage] = useState(1); // 페이지 번호
  const [moviesPerPage] = useState(8); // 한 페이지에 보여줄 영화 개수
  const [selectedGenre, setSelectedGenre] = useState('All'); // 선택된 장르
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  const genres = [
    '액션',
    '모험',
    '애니메이션',
    '코미디',
    '범죄',
    '다큐멘터리',
    '드라마',
    '판타지',
    '역사',
    '공포',
    '음악',
    '미스터리',
    '로맨스',
    'SF',
    'TV 영화',
    '스릴러',
    '전쟁',
    '서부'
  ];
  // 더미 영화 데이터
  const dummyMovies = [
    { title: 'Movie 1', imageUrl: 'https://via.placeholder.com/150', rating: 8.5, likes: 120, genre: '액션' },
    { title: 'Movie 2', imageUrl: 'https://via.placeholder.com/150', rating: 7.2, likes: 200, genre: '모험' },
    { title: 'Movie 3', imageUrl: 'https://via.placeholder.com/150', rating: 9.1, likes: 300, genre: '애니메이션' },
    { title: 'Movie 4', imageUrl: 'https://via.placeholder.com/150', rating: 6.8, likes: 150, genre: '코미디' },
    { title: 'Movie 5', imageUrl: 'https://via.placeholder.com/150', rating: 7.5, likes: 180, genre: '범죄' },
    { title: 'Movie 6', imageUrl: 'https://via.placeholder.com/150', rating: 8.0, likes: 220, genre: '다큐멘터리' },
    { title: 'Movie 7', imageUrl: 'https://via.placeholder.com/150', rating: 6.5, likes: 140, genre: '드라마' },
    { title: 'Movie 8', imageUrl: 'https://via.placeholder.com/150', rating: 7.8, likes: 210, genre: '판타지' },
    { title: 'Movie 9', imageUrl: 'https://via.placeholder.com/150', rating: 8.2, likes: 250, genre: '역사' },
    { title: 'Movie 10', imageUrl: 'https://via.placeholder.com/150', rating: 7.0, likes: 190, genre: '공포' },
    { title: 'Movie 11', imageUrl: 'https://via.placeholder.com/150', rating: 8.3, likes: 220, genre: '음악' },
    { title: 'Movie 12', imageUrl: 'https://via.placeholder.com/150', rating: 7.6, likes: 230, genre: '미스터리' },
    { title: 'Movie 13', imageUrl: 'https://via.placeholder.com/150', rating: 9.0, likes: 280, genre: '로맨스' },
    { title: 'Movie 14', imageUrl: 'https://via.placeholder.com/150', rating: 6.9, likes: 160, genre: 'SF' },
    { title: 'Movie 15', imageUrl: 'https://via.placeholder.com/150', rating: 7.9, likes: 250, genre: 'TV 영화' },
    { title: 'Movie 16', imageUrl: 'https://via.placeholder.com/150', rating: 8.7, likes: 300, genre: '스릴러' },
    { title: 'Movie 17', imageUrl: 'https://via.placeholder.com/150', rating: 6.4, likes: 130, genre: '전쟁' },
    { title: 'Movie 18', imageUrl: 'https://via.placeholder.com/150', rating: 8.4, likes: 210, genre: '서부' },
    { title: 'Movie 19', imageUrl: 'https://via.placeholder.com/150', rating: 7.3, likes: 190, genre: '액션' },
    { title: 'Movie 20', imageUrl: 'https://via.placeholder.com/150', rating: 9.2, likes: 310, genre: '모험' },
    { title: 'Movie 21', imageUrl: 'https://via.placeholder.com/150', rating: 7.4, likes: 230, genre: '애니메이션' },
    { title: 'Movie 22', imageUrl: 'https://via.placeholder.com/150', rating: 8.1, likes: 240, genre: '코미디' },
    { title: 'Movie 23', imageUrl: 'https://via.placeholder.com/150', rating: 7.7, likes: 250, genre: '범죄' },
    { title: 'Movie 24', imageUrl: 'https://via.placeholder.com/150', rating: 6.9, likes: 210, genre: '다큐멘터리' },
    { title: 'Movie 25', imageUrl: 'https://via.placeholder.com/150', rating: 8.5, likes: 260, genre: '드라마' },
    { title: 'Movie 26', imageUrl: 'https://via.placeholder.com/150', rating: 7.2, likes: 220, genre: '판타지' },
    { title: 'Movie 27', imageUrl: 'https://via.placeholder.com/150', rating: 9.0, likes: 300, genre: '역사' },
    { title: 'Movie 28', imageUrl: 'https://via.placeholder.com/150', rating: 6.8, likes: 180, genre: '공포' },
    { title: 'Movie 29', imageUrl: 'https://via.placeholder.com/150', rating: 7.5, likes: 190, genre: '음악' },
    { title: 'Movie 30', imageUrl: 'https://via.placeholder.com/150', rating: 8.3, likes: 220, genre: '미스터리' },
    { title: 'Movie 31', imageUrl: 'https://via.placeholder.com/150', rating: 7.0, likes: 180, genre: '로맨스' },
    { title: 'Movie 32', imageUrl: 'https://via.placeholder.com/150', rating: 8.6, likes: 310, genre: 'SF' },
    { title: 'Movie 33', imageUrl: 'https://via.placeholder.com/150', rating: 7.8, likes: 240, genre: 'TV 영화' },
    { title: 'Movie 34', imageUrl: 'https://via.placeholder.com/150', rating: 8.0, likes: 230, genre: '스릴러' },
    { title: 'Movie 35', imageUrl: 'https://via.placeholder.com/150', rating: 7.3, likes: 210, genre: '전쟁' },
    { title: 'Movie 36', imageUrl: 'https://via.placeholder.com/150', rating: 9.2, likes: 330, genre: '서부' },
    { title: 'Movie 37', imageUrl: 'https://via.placeholder.com/150', rating: 7.4, likes: 220, genre: '액션' },
    { title: 'Movie 38', imageUrl: 'https://via.placeholder.com/150', rating: 8.7, likes: 270, genre: '모험' },
    { title: 'Movie 39', imageUrl: 'https://via.placeholder.com/150', rating: 7.6, likes: 200, genre: '애니메이션' },
    { title: 'Movie 40', imageUrl: 'https://via.placeholder.com/150', rating: 8.4, likes: 260, genre: '코미디' }
  ];

  useEffect(() => {
    // 선택된 장르에 맞는 영화 데이터를 필터링하여 표시
    if (selectedGenre === 'All') {
      setMovies(dummyMovies);
    } else {
      setMovies(dummyMovies.filter(movie => movie.genre === selectedGenre));
    }
  }, [selectedGenre]);

  // 페이지네이션 처리
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // 페이지 변경 함수
  const paginate = (pageNumber) => setPage(pageNumber);
  const handleScroll = (direction) => {
    const container = document.getElementById("genre-buttons-container");
    const scrollAmount = 200; // 한번에 이동할 양

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount; // 왼쪽으로 스크롤
    } else if (direction === 'right') {
      container.scrollLeft += scrollAmount; // 오른쪽으로 스크롤
    }
  };
  return (
    <div>
      {/* 장르 버튼 */}
      <div id="genre-buttons-container" className={styles.genreButtonsContainer}>
        <button className={`${styles.genreButton} ${selectedGenre === 'All' ? styles.genreButtonSelected : ''}`} 
        onClick={() => setSelectedGenre('All')}>전체</button>
        {genres.map((genre, index) => (
          <button key={index} className={`${styles.genreButton} ${selectedGenre === genre ? styles.genreButtonSelected : ''}`} 
          onClick={() =>{
            setSelectedGenre(genre)
            setPage(1);
          }} >{genre}</button>
        ))}
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
            <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
          ))}
        </div>
      )}

      {/* 로딩 상태 */}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default MovieList;
