// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import userProfileSlice from './features/userProfileSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    userProfile: userProfileSlice,
  },
});
