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
import MovieListPage from '../pages/movie/MovieListPage';
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
  PhotoReview: {
    path: '/photo-review',
    element: <PhotoReviewDetail />,
  },
  NotFound: {
    path: '/not-found',
    element: <NotFound />,
  },
  MovieDetail: {
    path: '/movieDetail/:id',
    element: <MovieDetailPage />,
  },
  MovieList: {
    path: '/movieList',
    element: <MovieListPage />,
  }
};

export const AppRouteDef = {
  ...MainScreens,
};
