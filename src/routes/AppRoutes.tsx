import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';

import HomeRoutes from '@/modules/home/home.routes';
import LoginRoutes from '@/modules/login/login.routes';

const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomeRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PrivateRoute>
            <LoginRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
    );
  };
  
  export default AppRoutes;