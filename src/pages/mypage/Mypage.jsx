import { Container, Divider } from '@mui/material';
import MyWatchList from '../../components/mypage/MyWatchList';
import MyFavoriteWatchList from '../../components/mypage/MyFavoriteWatchList';
import { colors } from '../../global/globalStyle';
import UserProfile from '../../components/mypage/UserProfile';
import AlertMessage from '../../components/common/alert/AlertMessage';
import { useAlert } from '../../stores/alert/AlertStore';

const MyPage = () => {
  const { handleAlertOpen, handleAlertClose } = useAlert();
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
      <AlertMessage type={''} message={''} handleClose={() => handleAlertClose()} />
      <MyFavoriteWatchList />
    </Container>
  );
};
export default MyPage;
