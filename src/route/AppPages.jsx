import { Route, Routes } from 'react-router-dom';
import { AppRouteDef } from './RouteDef';

const AppPages = () => {
  return (
    <Routes>
      {Object.entries({ ...AppRouteDef }).map(([name, { path, element }], index) => (
        <Route key={name + index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppPages;
