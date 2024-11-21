import styles from './WatchListBox.module.css';

const WatchListBox = () => {
  const watchListData = [
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
    { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 }
  ];

  return (
    <div>
      <p className={styles.watchListTitle}>핫한 유저 PICK WatchList!</p>
      <div className={styles.watchListBox}>
        {watchListData.map((item, index) => (
          <div key={index} className={styles.watchListCard}>
            <div className={styles.cardImageContainer}>
              <img src={item.image} alt={item.watchListTitle} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.watchListTitle}</h3>
              <div className={styles.cardFooter}>
                <span>❤️ {item.heart}</span>
                <span>📜 {item.listItem} items</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListBox;
