import { Modal, Box, Button } from '@mui/material';
import { colors } from '../../global/globalStyle';
import X from '/assets/X.svg';
import popcornScore1 from '/assets/popcorn_score_1.svg';
import popcornScore2 from '/assets/popcorn_score_2.svg';
import popcornScore3 from '/assets/popcorn_score_3.svg';
import popcornScore4 from '/assets/popcorn_score_4.svg';
import popcornScore5 from '/assets/popcorn_score_5.svg';
const RatingModal = ({ open, onClose }) => {
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
          borderRadius:2.5,
         
        }}
      >
        <Box
          sx={{
            maxWidth:920,
            display: 'flex',
            justifyContent: 'space-between',
            padding:'1rem 2rem',
          }}
        >
          <p>이 영화는 어떠셨나요?</p>
          <Button onClick={onClose} sx={{}}>
            <img style={{ width: '45%' }} src="/assets/X.svg" alt="X Icon" />
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding:'1rem 2rem 0rem',
            gap:1,
          }}
        >
          <Button
          sx={{
            display:'flex',
            flexDirection:'column',
          }}>
            <img style={{ width: '30%' }} src="/assets/popcorn_score_1.svg" />

            <p style={{ color: 'white' }}>별로예요</p>
          </Button>

          <Button sx={{
            display:'flex',
            flexDirection:'column',
          }}>
            <img style={{ width: '30%' }} src="/assets/popcorn_score_2.svg" />
            <p style={{ color: 'white' }}>그저그래요</p>
          </Button>

          <Button sx={{
            display:'flex',
            flexDirection:'column',
          }}>
            <img style={{ width: '30%' }} src="/assets/popcorn_score_3.svg" />
            <p style={{ color: 'white' }}>좋아요</p>
          </Button>

          <Button sx={{
            display:'flex',
            flexDirection:'column',
          }}>
            <img style={{ width: '30%' }} src="/assets/popcorn_score_4.svg" />

            <p style={{ color: 'white' }}>재밌어요</p>
          </Button>

          <Button sx={{
            display:'flex',
            flexDirection:'column',
          }}>
            <img style={{ width: '30%' }} src="/assets/popcorn_score_5.svg" />

            <p style={{ color: 'white' }}>최고예요</p>
          </Button>
        </Box>
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                padding:'2rem 1rem'
            }}>
            <Button
            sx={{
                width:200,
                borderRadius:30,
                backgroundColor:'white',
                color:'black',
            }}>
                등록하기
            </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default RatingModal;
