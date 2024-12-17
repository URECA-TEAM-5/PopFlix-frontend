import { PoppleTipContainer, PoppleCard, PoppleIcon, PoppleText, PoppleCardContainer } from './style/PoppleTip';
import { poppleTipData, moviesData } from '../main/data';
import { getMovieRating } from '../../api/movieDetail/movieDetail';
import PhotoReviewModal from './PhotoReviewModal';
import RatingModal from './RatingModal';
import { useState } from 'react';
import { useEffect } from 'react';

const PoppleTip = ({ movieId }) => {
  // const movie = moviesData[movieId - 1];
  const [movie, setMovie] = useState([]);
  const popple = poppleTipData[movie];
  
  const [openPhotoReviewModal, setOpenPhotoReviewModal] = useState(false);
  const [openRatingModal, setOpenRatingModal] = useState(false);

  const fetchMovieRating = async() =>{
    try {
      const response = await getMovieRating(movieId);
      console.log("레이팅 : ",response.response);
      setMovie(response.response);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    fetchMovieRating();
  },[])
  // 핸들러 함수 정의
  const handlePhotoReviewOpen = () => {
    setOpenPhotoReviewModal(true);
  };

  const handlePhotoReviewClose = () => {
    setOpenPhotoReviewModal(false);
  };

  const handleRatingOpen = () => {
    setOpenRatingModal(true);
  };

  const handleRatingClose = () => {
    setOpenRatingModal(false);
  };

  const handleRatingSubmit = () => {
    console.log("Rating submitted!");
    setOpenRatingModal(false);
  };

  const handlePhotoReviewSubmit = () => {
    console.log("Photo review submitted!");
    setOpenPhotoReviewModal(false);
  };

  return (
    <PoppleTipContainer>
      <PoppleText>
        <p style={{ fontWeight: 'bold' }}>팝플 Tip💫</p>
      </PoppleText>
      <PoppleCardContainer>
        {poppleTipData(movie).map((poppleTip) => (
          <PoppleCard key={poppleTip.id}>
            <PoppleIcon>
              <img src={poppleTip.icon} alt="icon" />
            </PoppleIcon>

            <PoppleText>
              <p>{poppleTip.title}</p>
              <p style={{ fontSize: '0.8125rem' }}>
                {poppleTip.text.split(/(등록|작성|[0-9.]+점)/g).map((part, index) =>
                  part === '등록' ? (
                    <span
                      key={index}
                      onClick={handleRatingOpen}
                      style={{ color: '#F09605', cursor: 'pointer' }}
                    >
                      {part}
                    </span>
                  ) : part === '작성' ? (
                    <span
                      key={index}
                      onClick={handlePhotoReviewOpen}
                      style={{ color: '#F09605', cursor: 'pointer' }}
                    >
                      {part}
                    </span>
                  ) : part.includes('점') && !isNaN(parseFloat(part)) ? (
                    <span key={index} style={{ color: '#F09605' }}>
                      {part}
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
              </p>
            </PoppleText>
          </PoppleCard>
        ))}
      </PoppleCardContainer>

      {/* 모달 컴포넌트 */}
      <PhotoReviewModal
        open={openPhotoReviewModal}
        onClose={handlePhotoReviewClose}
        onSubmit={handlePhotoReviewSubmit}
      />
      <RatingModal
        open={openRatingModal}
        onClose={handleRatingClose}
        onSubmit={handleRatingSubmit}
      />
    </PoppleTipContainer>
  );
};

export default PoppleTip;
