import LoginModal from '../components/Login/LoginModal';
import AddUserInfo from '../pages/addUserInfo/AddUserInfo';
import Alarm from '../pages/alarm/Alarm';
import MainPage from '../pages/main/MainPage';
import WatchListDetailPage from '../pages/watchlist/WatchListDetailPage';
import PhotoReviewDetail from '../pages/review/photo/PhotoReviewDetail';
import WatchListPage from '../pages/watchlist/WatchListPage';
import MovieDetailPage from '../pages/movie/MovieDetailPage';
const MainScreens = {
  Main: {
    path: '/',
    element: <MainPage />,
  },
  LoginModal: {
    path: '/login',
    element: <LoginModal />,
  },
  UserInfo: {
    path: '/AddUserInfo',
    element: <AddUserInfo />,
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
  PhotoReview: {
    path: '/photo-review',
    element: <PhotoReviewDetail />,
  },
  MovieDetail: {
    path: '/movieDetail/:id',
    element: <MovieDetailPage />,
  }
};

export const AppRouteDef = {
  ...MainScreens,
};
