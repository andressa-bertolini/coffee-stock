import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from './login.types';

const initialState: UserState = {
  user: {
    name: 'brewster',
    role: 'admin'
  },
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export default loginSlice.reducer;