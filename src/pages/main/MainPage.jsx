import MoviList from '../../components/main/MovieList';
import WatchListBox from '../../components/main/WatchListBox';
import TodayPickMovies from '../../components/main/TodayPickMovies';
import MainBannerBlack from '/assets/main_banner_black.svg';
import TodayPickMovieList from '../../components/main/TodayPickMovieList';
import styles from './MainPage.module.css';
const MainPage = () => {
  return (
    <div className={styles.container}>
      <TodayPickMovies />
      <WatchListBox />
      <TodayPickMovieList />
      <div className={styles.mainBannerContainer}>
        <img className={styles.mainBanner} src={MainBannerBlack} alt="Main Banner" />
      </div>
      <MoviList />
    </div>
  );
};
export default MainPage;
