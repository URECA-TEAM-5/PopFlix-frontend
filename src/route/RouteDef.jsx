import LoginModal from '../components/Login/LoginModal';
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
  Alarm: {
    path: '/alarm',
    element: <Alarm />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
