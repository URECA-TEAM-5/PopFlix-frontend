import LoginModal from '../components/Login/LoginModal';
import AddUserInfo from '../pages/userInfo/AddUserInfo';
import UpdateUserInfo from '../pages/userInfo/UpdateUserInfo';
import Alarm from '../pages/alarm/Alarm';
import MainPage from '../pages/main/MainPage';
import WatchListDetailPage from '../pages/watchlist/WatchListDetailPage';
import PhotoReviewDetail from '../pages/review/photo/PhotoReviewDetail';
import WatchListPage from '../pages/watchlist/WatchListPage';
import MyPage from '../pages/mypage/Mypage';
import WatchListEditPage from '../pages/watchlist/WatchListEditPage';

const MainScreens = {
  Main: {
    path: '/',
    element: <MainPage />,
  },
  LoginModal: {
    path: '/login',
    element: <LoginModal />,
  },
  AddUserInfo: {
    path: '/AddUserInfo',
    element: <AddUserInfo />,
  },
  UpdateUserInfo: {
    path: '/UpdateUserInfo',
    element: <UpdateUserInfo />,
  },
  Alarm: {
    path: '/alarm',
    element: <Alarm />,
  },
  WatchList: {
    path: '/watchlist',
    element: <WatchListPage />,
  },
  WatchListDetail: {
    path: '/watchlist/:id',
    element: <WatchListDetailPage />,
  },
  WatchListEdit: {
    path: '/watchlist/:id/edit',
    element: <WatchListEditPage />,
  },
  PhotoReview: {
    path: '/photo-review',
    element: <PhotoReviewDetail />,
  },
  Mypage: {
    path: '/mypage',
    element: <MyPage />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
