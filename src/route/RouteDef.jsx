import LoginModal from '../components/login/LoginModal';
import AddUserInfo from '../pages/addUserInfo/AddUserInfo';

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
};

export const AppRouteDef = {
  ...MainScreens,
};
