import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/modules/login/login.slice';
import userReducer from '@/modules/login/user.slice';
import productsReducer from '@/modules/stock/products/products.slice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    products: productsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch