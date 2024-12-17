import { Modal, Box, Button } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { addRating } from '../../api/movieDetail/movieDetail';
import { useState } from 'react';

const RatingModal = ({ open, onClose, movieId }) => {
  const [selectedRating, setSelectedRating] = useState(null); // 선택된 점수 상태 관리

  // 점수를 선택했을 때 상태 업데이트
  const handleSelectRating = (rating) => {
    setSelectedRating(rating);
  };

  // 팝콘 지수 추가 요청 함수
  const fetchAddRating = async () => {
    if (!selectedRating) {
      alert("점수를 선택해주세요.");
      return;
    }

    const requestData = {
      userId: 23, // 사용자 ID
      movieId: 1, // 영화 ID
      rating: selectedRating, // 선택된 점수
    };
  
    console.log("전송 데이터:", requestData); // 데이터 확인용 로그
  
    try {
      const response = await addRating(requestData);
      console.log("팝콘지수 추가 성공:", response);
      onClose(); // 모달 닫기
    } catch (error) {
      console.error("팝콘지수 추가 실패:", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 920,
          width: '100%',
          bgcolor: colors.navy_gray,
          boxShadow: 24,
          borderRadius: 2.5,
        }}
      >
        <Box
          sx={{
            maxWidth: 920,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
          }}
        >
          <p>이 영화는 어떠셨나요?</p>
          <Button onClick={onClose}>
            <img style={{ width: '45%' }} src="/assets/X.svg" alt="X Icon" />
          </Button>
        </Box>

        {/* 점수 선택 버튼 */}
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '1rem 2rem 0rem',
            gap: 1,
          }}
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <Button
              key={rating}
              onClick={() => handleSelectRating(rating)} // 점수 선택 이벤트
              sx={{
                display: 'flex',
                flexDirection: 'column',
                border: selectedRating === rating ? '2px solid yellow' : 'none', // 선택된 점수 강조
              }}
            >
              <img
                style={{ width: '30%' }}
                src={`/assets/popcorn_score_${rating}.svg`}
                alt={`Rating ${rating}`}
              />
              <p style={{ color: 'white' }}>
                {rating === 1
                  ? '별로예요'
                  : rating === 2
                  ? '그저그래요'
                  : rating === 3
                  ? '좋아요'
                  : rating === 4
                  ? '재밌어요'
                  : '최고예요'}
              </p>
            </Button>
          ))}
        </Box>

        {/* 등록하기 버튼 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem 1rem',
          }}
        >
          <Button
            onClick={fetchAddRating} // 점수 등록
            sx={{
              width: 200,
              borderRadius: 30,
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            등록하기
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RatingModal;
