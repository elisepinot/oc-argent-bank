import { fetchUserProfile, updateUserProfile } from '../apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserThunk = createAsyncThunk(
  'auth/fetchUser',
  async (token, { rejectWithValue }) => {
    try {
      const data = await fetchUserProfile(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateUserThunk = createAsyncThunk(
  'user/updateProfile',
  async ({ token, firstName, lastName }, { rejectWithValue }) => {
    try {
      const data = await updateUserProfile(token, firstName, lastName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
