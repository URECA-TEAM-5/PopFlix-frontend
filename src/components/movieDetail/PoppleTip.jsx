import { PoppleTipContainer, PoppleCard, PoppleIcon, PoppleText, PoppleCardContainer } from './style/PoppleTip';
import { poppleTipData, moviesData } from '../main/data';
// import { useEffect } from 'react';
import PhotoReviewModal from './PhotoReviewModal';
import { useState } from 'react';
const PoppleTip = ({ movieId }) => {
  const movie = moviesData[movieId - 1];
  const popple = poppleTipData[movie];
  const [openModal,setOpenModal] = useState(false);
  const handleModalOpen = () =>{
    setOpenModal(true);
  }
  const handleModalClose = () =>{
    setOpenModal(false);
  }
  const handleModalSubmit= () => {
    setOpenModal(false);
  }
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
              onClick={() => console.log('등록 클릭')}
              style={{ color: '#F09605', cursor: 'pointer' }}
            >
              {part}
            </span>
          ) : part === '작성' ? (
            <span
              key={index}
              onClick={handleModalOpen}
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
       
       <PhotoReviewModal
        open={openModal}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </PoppleTipContainer>
  );
};
export default PoppleTip;
