import MovieList from '../../components/main/MovieList';
import MainBannerBlack from '/assets/main_banner_black.svg';
import { MovieListContainer, MainBannerContainer } from './style/movieListPage';
const MovieListPage = () => {
  return (
    <MovieListContainer>
      <MainBannerContainer>
      <img className="main-banner"src={MainBannerBlack}/>
      </MainBannerContainer>
      <MovieList  rows={5} columns={4} showMoreButton={false}/>
    </MovieListContainer>
  );
};
export default MovieListPage;
