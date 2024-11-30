import { todayPickMoviesData } from './data';
import Slider from 'react-slick';
import styles from './style/TodayPickMovies.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const TodayPickMovies = () => {
  const settings = {
    dots: true, // 도트 네비게이션 표시
    infinite: true, // 무한 슬라이드
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 1, // 한 번에 하나의 슬라이드 표시
    slidesToScroll: 1, // 한 번에 한 슬라이드씩 이동
    // autoplay: true, // 자동 슬라이드
    // autoplaySpeed: 3000, // 자동 슬라이드 속도 (3초마다 전환)
  };
  return (
    <div className={styles.slideContainer}>
      <Slider {...settings}>
      {todayPickMoviesData.map((movie) => (
        <div key={movie.id} className={styles.container}>
          <div className={styles.imageWrapper}>
            <img 
              src={movie.image} 
              alt={movie.title} 
              className={styles.image}
            />
          </div>
        </div>
      ))}
    </Slider>
      
    </div>
  );
};
export default TodayPickMovies;
