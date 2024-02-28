import { fetchUserProfile, updateUserProfile } from '../apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUserThunk = createAsyncThunk('auth/fetchUser', async (token) => {
//   const data = await fetchUserProfile(token);
//   return data;
// });

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

//Quand le login est effectué, j'appelle la 2e fonction
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
