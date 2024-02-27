import { createSlice } from '@reduxjs/toolkit';
import { fetchUserThunk, updateUserThunk } from './userProfileThunk';

const initialState = {
  profile: null,
  //   isLoading: false,
  //   error: null,
};

const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userProfileSlice.reducer;

//   extraReducers: (builder) => {
//     builder
//       // Fetch user
//       .addCase(fetchUserThunk.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserThunk.fulfilled, (state, action) => {
//         state.user = action.payload; // Assurez-vous que cela correspond à la structure de vos données
//         state.isLoading = false;
//       })
//       .addCase(fetchUserThunk.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       // Update user
//       .addCase(updateUserThunk.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(updateUserThunk.fulfilled, (state, action) => {
//         state.user = action.payload; // Met à jour l'utilisateur avec les nouvelles données
//         state.isLoading = false;
//       })
//       .addCase(updateUserThunk.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
