import { Container, Divider } from '@mui/material';
import MyWatchList from '../../components/mypage/MyWatchList';
import MyFavoriteWatchList from '../../components/mypage/MyFavoriteWatchList';
import UserProfile from '../../components/myPage/UserProfile';
import { colors } from '../../global/globalStyle';

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
