import { createSlice } from '@reduxjs/toolkit';
import type { ProductsState } from './product.types';

const initialState: ProductsState = {
  products: {
    id: 1,
    name: 'andressa',
    role: 'admin',
    branches: [1,2,3]
  },
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: () => {}
});

export default productsSlice.reducer;