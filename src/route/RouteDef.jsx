import MainPage from '../pages/main/MainPage';
import WatchListPage from '../pages/watchlist/WatchListPage';

const MainScreens = {
  Main: {
    path: '/',
    element: <MainPage />,
  },
};

const WatchListScreens = {
  WatchList: {
    path: '/watchlist',
    element: <WatchListPage />,
  },
};

export const AppRouteDef = {
  ...MainScreens, ...WatchListScreens
};
