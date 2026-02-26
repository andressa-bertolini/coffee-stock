import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import Login from './index.tsx';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Login /></PrivateRoute>} />
    </Routes>
  );
};

export default LoginRoutes;