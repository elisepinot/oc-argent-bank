import { fetchUserProfile, updateUserProfile } from '../apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserThunk = createAsyncThunk('auth/fetchUser', async (token) => {
  const data = await fetchUserProfile(token);
  return data;
});

export const updateUserThunk = createAsyncThunk('auth/updateUser', async (req) => {
  const data = await updateUserProfile(req);
  return data;
});
