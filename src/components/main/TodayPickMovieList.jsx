import React,{useState,useRef} from 'react';
import styles from './style/TodayPickMovieList.module.css';
import {pickContentData} from './data';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TodayPickMovieList = () => {
    
    const [currentIndex,setCurrentIndex]=useState(0);
    const handleRight = () => {
        if(currentIndex < pickContentData.length -5 ){
            setCurrentIndex(currentIndex + 5);
        }
    };
    const settings = useRef({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    });
    return (
        <div className={styles.container}>
            <p className={styles.p}>오늘은 이 콘텐츠 어때요?</p>
            <div className={styles.todayPickMovieList}>
            <Slider {...settings.current} className={styles.slideContainer}>
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
            
        </div>
    )
}
export default TodayPickMovieList;