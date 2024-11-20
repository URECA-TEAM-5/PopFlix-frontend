import MoviList from '../../components/main/MovieList';
import MainBanner from '/assets/main_banner.svg';
import styled from './MainPage.module.css';
const MainPage = () => {
    return (
        <div className={styled.container}>
            <img className={styled.mainBanner} src={MainBanner} alt="Main Banner" /> 
            <MoviList/>
        </div>
    )
}
export default MainPage;