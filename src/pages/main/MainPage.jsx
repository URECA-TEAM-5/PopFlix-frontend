import MoviList from '../../components/main/MovieList';
import WatchListBox from '../../components/main/WatchListBox';
import TodayPickMovies from '../../components/main/TodayPickMoives';
import MainBanner from '/assets/main_banner.svg';
import TodayPickMovieList from '../../components/main/TodayPickMovieList';
import styles from './MainPage.module.css';
const MainPage = () => {
    return (
        <div className={styles.container}>
            <TodayPickMovies/>
            <WatchListBox/>
            <TodayPickMovieList/>
            <img className={styles.mainBanner} src={MainBanner} alt="Main Banner" /> 
            <MoviList/>
        </div>
    )
}
export default MainPage;