import MoviList from '../../components/main/MovieList';
import MainBanner from '/assets/main_banner.svg';
import styles from './MainPage.module.css';
const MainPage = () => {
    return (
        <div className={styles.container}>
            <img className={styles.mainBanner} src={MainBanner} alt="Main Banner" /> 
            <MoviList/>
        </div>
    )
}
export default MainPage;