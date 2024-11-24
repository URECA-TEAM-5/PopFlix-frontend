import LoginModal from '../components/Login/LoginModal';
import AddUserInfo from '../pages/addUserInfo/AddUserInfo';
import Alarm from '../pages/alarm/Alarm';
import MainPage from '../pages/main/MainPage';

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
};

export const AppRouteDef = {
  ...MainScreens,
};
