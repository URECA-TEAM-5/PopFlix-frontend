import React,{useState} from 'react';
import styles from './style/TodayPickMovieList.module.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TodayPickMovieList = () => {
    const pickContentData = [
        {id:1,movieImage:'https://via.placeholder.com/150'},
        {id:2,movieImage:'https://via.placeholder.com/150'},
        {id:3,movieImage:'https://via.placeholder.com/150'},
        {id:4,movieImage:'https://via.placeholder.com/150'},
        {id:5,movieImage:'https://via.placeholder.com/150'},
        {id:6,movieImage:'https://via.placeholder.com/150'},
        {id:7,movieImage:'https://via.placeholder.com/150'},
        {id:8,movieImage:'https://via.placeholder.com/150'},
        {id:9,movieImage:'https://via.placeholder.com/150'},
        {id:10,movieImage:'https://via.placeholder.com/150'}
    ]
    const [currentIndex,setCurrentIndex]=useState(0);
    const handleRight = () => {
        if(currentIndex < pickContentData.length -5 ){
            setCurrentIndex(currentIndex + 5);
        }
    };
    const handleLeft = () => {
        if(currentIndex > 0 ){
            setCurrentIndex(currentIndex - 5);
        }
    };
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        
      };
    return (
        <div className={styles.container}>
            오늘은 이 콘텐츠 어때요?
            <Slider {...settings}>
            {pickContentData.map((item) => (
                <div key={item.id} className={styles.todayPickMovieCard}>
                    <img src={item.movieImage} className={styles.todayPickMovieCard}/>
                    <div className={styles.todayPickRank}>
                        <p>{item.id}</p>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}
export default TodayPickMovieList;