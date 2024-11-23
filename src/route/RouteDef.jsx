import LoginModal from '../components/Login/LoginModal';
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
};

export const AppRouteDef = {
  ...MainScreens,
};
