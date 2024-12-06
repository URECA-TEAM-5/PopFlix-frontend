import { moviesData } from '../main/data.js';
import { MovieIntroContainer, Header, MovieDetailContainer, Genre, MovieImage, MovieOverview } from './style/MovieIntro';
import ReviewHeader from '../review/photo/ReviewHeader.jsx';
const MovieIntro = ({ movieId }) => {
  const movie = moviesData[movieId - 1]; // movieId에 해당하는 영화 데이터 가져오기
  return (
    <MovieIntroContainer>
      <ReviewHeader />

      <MovieDetailContainer>
        <MovieImage src={movie.imageUrl} alt={movie.title} />
        <MovieOverview>{movie.overview}</MovieOverview>
      </MovieDetailContainer>
    </MovieIntroContainer>
  );
};

export default MovieIntro;
