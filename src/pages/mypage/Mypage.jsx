import { Container, Divider } from '@mui/material';
import MyWatchList from '../../components/mypage/MyWatchList';
import MyFavoriteWatchList from '../../components/mypage/MyFavoriteWatchList';
import { colors } from '../../global/globalStyle';
import UserProfile from '../../components/myPage/UserProfile';

const MyPage = () => {
  return (
    <Container>
      <UserProfile />
      <Divider
        sx={{
          bgcolor: colors.cement_gray,
          width: '100%',
          mt: '3rem',
          mb: '3rem',
        }}
      />
      <MyWatchList />
      <MyFavoriteWatchList />
    </Container>
  );
};
export default MyPage;
