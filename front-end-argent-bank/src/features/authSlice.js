import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './authThunk';

//On a besoin d'un état initial pour l'authentification, ainsi que de reducers pour mettre à jour cet état en fonction des actions telles que l'authentification, la déconnexion, etc.
const initialState = {
  isAuthenticated: false,
  token: null,
  status: 'idle', // Ajout de 'status' pour suivre l'état de la requête, pratique courante dans les applications Redux qui gèrent des requêtes asynchrones. idle : état initial avant que toute action soit prise. Aucune requête n'a encore été initiée.
};

//Le slice nommé 'auth' contient 2 reducers : login et logout
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
      state.isAuthenticated = true;
      state.status = 'succeeded';
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
