import LoginModal from '../components/Login/LoginModal';
import MainPage from '../pages/main/MainPage';
import WatchListPage from '../pages/watchlist/WatchListPage';

const MainScreens = {
  Main: {
    path: '/',
    element: <MainPage />,
  },
  LoginModal: {
    path: '/login',
    element: <LoginModal />,
  },
};

const WatchListScreens = {
  WatchList: {
    path: '/watchlist',
    element: <WatchListPage />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
