import LoginModal from '../components/Login/LoginModal';
import AddUserInfo from '../pages/userInfo/AddUserInfo';
import UpdateUserInfo from '../pages/userInfo/UpdateUserInfo';
import Alarm from '../pages/alarm/Alarm';
import MainPage from '../pages/main/MainPage';
import WatchListDetailPage from '../pages/watchlist/WatchListDetailPage';
import PhotoReviewDetail from '../pages/review/photo/PhotoReviewDetail';
import WatchListPage from '../pages/watchlist/WatchListPage';
import NotFound from '../pages/error/NotFound';
import MovieDetailPage from '../pages/movie/MovieDetailPage';
import MyPage from '../pages/mypage/Mypage';
import WatchListEditPage from '../pages/watchlist/WatchListEditPage';

import MovieListPage from '../pages/movie/MovieListPage';
const MainScreens = {
  NotFound: {
    path: '*',
    element: <NotFound />,
  },
  Main: {
    path: '/',
    element: <MainPage />,
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
  MovieDetail: {
    path: '/movieDetail/:id',
    element: <MovieDetailPage />,
  },
  Mypage: {
    path: '/mypage',
    element: <MyPage />,
  },
  MovieList: {
    path: '/movieList',
    element: <MovieListPage />,
  }
};

export const AppRouteDef = {
  ...MainScreens,
};
