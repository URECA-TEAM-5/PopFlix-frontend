import MovieList from '../../components/main/MovieList';
import MainBannerBlack from '/assets/main_banner_black.svg';
import { MovieListContainer, MainBannerContainer } from './style/movieListPage';
const MovieListPage = () => {
  return (
    <MovieListContainer>
      <MainBannerContainer>
        <img className="main-banner"src={MainBannerBlack}/>
        <MovieList />
      </MainBannerContainer>
    </MovieListContainer>
  );
};
export default MovieListPage;
