import { moviesData } from '../main/data.js';
import { useEffect, useState } from 'react';
import { MovieIntroContainer, MovieCast,  MovieDetailContainer, GenreContainer, MovieImage, MovieOverview, GenreButton } from './style/MovieIntro';
import { getMovieDetail } from '../../api/movieDetail/movieDetail.js';
import ReviewHeader from '../review/photo/ReviewHeader.jsx';
const MovieIntro = ({ movieId }) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [genres, setGenres] = useState([]);
  const [casts, setCasts] = useState([]);
  const [director, setDirector] = useState(null);
  const fetchMovieDetail = async () => {
    try {
      const response = await getMovieDetail(movieId);
      console.log(response);
      console.log(response.response);
      console.log('director: ', response.response.directors[0].name);
      console.log('cast', response.response.cast?.slice(0, 3));
      setGenres(response.response.genre_ids);
      setMovieDetail(response.response);
      setDirector(response.response.directors?.[0] || null);
      setCasts(response.response.cast?.slice(0, 3) || []);
    } catch (error) {
      console.log('error : ', error);
    }
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  return (
    <MovieIntroContainer>
      <ReviewHeader title={movieDetail.title} subTitle={movieDetail.release_date} />
      <GenreContainer>
        {genres.map((genre,index) => (
          <GenreButton key={index}>{genre.name}</GenreButton>
        ))}
      </GenreContainer>
      <MovieDetailContainer>
        <MovieImage src={movieDetail.poster_path} alt={movieDetail.title} />
        <MovieOverview>
          <MovieCast>
            <p>#{director ? director.name : ''}</p>
            {casts.map((cast,index) => (
              <p key={index}>#{cast.name}</p>
            ))}
          </MovieCast>
          <br />
          <p>{movieDetail.overview}</p>
        </MovieOverview>
      </MovieDetailContainer>
    </MovieIntroContainer>
  );
};

export default MovieIntro;