import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './authThunk';

//On a besoin d'un état initial pour l'authentification, ainsi que de reducers pour mettre à jour cet état en fonction des actions telles que l'authentification, la déconnexion, etc.
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  status: 'idle', // Ajout de 'status' pour suivre l'état de la requête, pratique courante dans les applications Redux qui gèrent des requêtes asynchrones. idle : état initial avant que toute action soit prise. Aucune requête n'a encore été initiée.
};

//Le slice nommé 'auth' contient 2 reducers : login et logout
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.status = 'idle';
      // state.rememberMe = false;
      localStorage.removeItem('token'); // Nettoyage du localStorage lors de la déconnexion
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    // .addCase(fetchUserThunk.fulfilled, (state, action) => {
    //   state.user = action.payload.body;
    // })
    // .addCase(updateUserThunk.fulfilled, (state, action) => {
    //   state.user = action.payload.body;
    // });
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
