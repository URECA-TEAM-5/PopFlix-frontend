import React, { useState, useEffect } from 'react';
import styles from './style/WatchListBox.module.css';
import { getWatchlistMonthlyTop } from '../../api/watchlist/watchlist';

const WatchListBox = () => {
  const [watchListBox, setWatchListBox] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchMovies = async () => {
    try {
      const response = await getWatchlistMonthlyTop(2024, 12);
      console.log('영화 와치리스트 : ', response.response);
      setWatchListBox(response.response.slice(0, 5));
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchMovies();
    }
  }, [isLoading]);
  const handleWatchListDetail = (id) => {
    window.location.href = `/watchList/${id}`;
  };

  return (
    <div className={styles.container}>
      <p className={styles.p}>핫한 유저 PICK WatchList!</p>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <div className={styles.watchListBox}>
          {watchListBox.map((item, index) => (
            <div key={index} className={styles.watchListCard} onClick={() => handleWatchListDetail(item.id)}>
              <div className={styles.cardImageContainer}>
                <img src={item.storageImage} alt={item.watchListTitle} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{item.storageName}</p>
                <div className={styles.cardFooter}>
                  <span>♡{item.likeCount}</span>
                  <span>|</span>
                  <span>{item.movieCount}편</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchListBox;
