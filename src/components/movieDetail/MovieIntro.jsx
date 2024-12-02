import { moviesData } from '../main/data.js';
import { MovieIntroContainer, Header, MovieDetailContainer, Genre, MovieImage, MovieOverview } from './style/MovieIntro';

const MovieIntro = ({ movieId }) => {
  const movie = moviesData[movieId - 1]; // movieId에 해당하는 영화 데이터 가져오기
  return (
    <MovieIntroContainer>
      <Header>헤더 부분입니다!</Header>
      <MovieDetailContainer>
        <MovieImage src={movie.imageUrl} alt={movie.title} />
        <MovieOverview>{movie.overview}</MovieOverview>
      </MovieDetailContainer>
    </MovieIntroContainer>
  );
};

export default MovieIntro;
