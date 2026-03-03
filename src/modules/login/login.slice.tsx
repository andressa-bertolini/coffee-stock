import { createSlice } from '@reduxjs/toolkit';
import type { LoginState } from './login.types';

const initialState: LoginState = {
  token: 'fake_token',
  isAuthenticated: true,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
});

export default loginSlice.reducer;