import { createSlice } from '@reduxjs/toolkit';
import { fetchUserThunk, updateUserThunk } from './userProfileThunk';

const initialState = {
  firstName: null,
  lastName: null,
};

const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      });
  },
});

export default userProfileSlice.reducer;
