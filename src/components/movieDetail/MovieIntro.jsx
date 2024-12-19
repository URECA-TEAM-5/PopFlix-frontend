import { MovieIntroContainer, MovieCast, MovieDetailContainer, GenreContainer, MovieImage, MovieOverview, GenreButton } from './style/MovieIntro';
import ReviewHeader from '../review/photo/ReviewHeader.jsx';
import { useMovieDetail } from '../../stores/movieDetail/MovieDetailStore.js';
const MovieIntro = () => {
  const { movieData } = useMovieDetail();
  // const [movieDetail, setMovieDetail] = useState([]);
  // const [genres, setGenres] = useState([]);
  // const [casts, setCasts] = useState([]);
  // const [director, setDirector] = useState(null);
  // const fetchMovieDetail = async () => {
  //   try {
  //     const response = await getMovieDetail(movieId);
  //     setGenres(response.response.genre_ids);
  //     setMovieDetail(response.response);
  //     setDirector(response.response.directors?.[0] || null);
  //     setCasts(response.response.cast?.slice(0, 3) || []);
  //   } catch (error) {
  //     console.log('error : ', error);
  //   }
  // };
  // useEffect(() => {
  //   fetchMovieDetail();
  // }, []);
  return (
    <MovieIntroContainer>
      <ReviewHeader title={movieData.title} subTitle={movieData.release_date} />
      <GenreContainer>
        {movieData.genre_ids.map((genre, index) => (
          <GenreButton key={index}>{genre.name}</GenreButton>
        ))}
      </GenreContainer>
      <MovieDetailContainer>
        <MovieImage src={movieData.poster_path} alt={movieData.title} />
        <MovieOverview>
          <MovieCast>
            <p>#{movieData.directors ? movieData.directors[0].name : ''}</p>
            {movieData.cast.slice(0, 3).map((cast, index) => (
              <p key={index}>#{cast.name}</p>
            ))}
          </MovieCast>
          <br />
          <p>{movieData.overview}</p>
        </MovieOverview>
      </MovieDetailContainer>
    </MovieIntroContainer>
  );
};

export default MovieIntro;
