import LoginModal from '../components/Login/LoginModal';
import MainPage from '../pages/main/MainPage';

const MainScreens = {
  Main: {
    path: '/',
    element: <MainPage />,
  },
};

const LoginModals = {
  Main: {
    path: '/login',
    element: <LoginModal />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
  ...LoginModals,
};
