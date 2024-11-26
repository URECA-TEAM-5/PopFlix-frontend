import styles from './style/WatchListBox.module.css';

const WatchListBox = () => {
  const watchListData = [
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 }
  ];

  return (
    <div className={styles.container}>
      <p className={styles.p}>핫한 유저 PICK WatchList!</p>
      <div className={styles.watchListBox}>
        {watchListData.map((item, index) => (
          <div key={index} className={styles.watchListCard}>
            <div className={styles.cardImageContainer}>
              <img src={item.image} alt={item.watchListTitle} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>{item.watchListTitle}</p>
              <div className={styles.cardFooter}>
                <span>♡{item.heart}</span>
                <span>|</span>
                <span>{item.listItem}편</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListBox;
