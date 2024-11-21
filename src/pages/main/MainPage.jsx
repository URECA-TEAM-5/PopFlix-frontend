import MoviList from '../../components/main/MovieList';
import WatchListBox from '../../components/main/WatchListBox';
import MainBanner from '/assets/main_banner.svg';
import styles from './MainPage.module.css';
const MainPage = () => {
    return (
        <div className={styles.container}>
            <WatchListBox/>
            <img className={styles.mainBanner} src={MainBanner} alt="Main Banner" /> 
            <MoviList/>
        </div>
    )
}
export default MainPage;