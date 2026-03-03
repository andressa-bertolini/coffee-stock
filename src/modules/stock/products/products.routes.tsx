import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import Products from './index.tsx';

const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Products /></PrivateRoute>} />
    </Routes>
  );
};

export default ProductsRoutes;