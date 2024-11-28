import LoginModal from '../components/Login/LoginModal';
import AddUserInfo from '../pages/userInfo/AddUserInfo';
import UpdateUserInfo from '../pages/userInfo/UpdateUserInfo';
import Alarm from '../pages/alarm/Alarm';
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
};

export const AppRouteDef = {
  ...MainScreens,
};
