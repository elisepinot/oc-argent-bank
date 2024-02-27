import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './authThunk';

//On a besoin d'un état initial pour l'authentification, ainsi que de reducers pour mettre à jour cet état en fonction des actions telles que l'authentification, la déconnexion, etc.
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  status: 'idle', // Ajout de 'status' pour suivre l'état de la requête, pratique courante dans les applications Redux qui gèrent des requêtes asynchrones. idle : état initial avant que toute action soit prise. Aucune requête n'a encore été initiée.

  rememberMe: false,
};

//Le slice nommé 'auth' contient 2 reducers : login et logout
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleRememberMe(state, action) {
      state.rememberMe = action.payload;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.rememberMe = false;
      localStorage.removeItem('token'); // Nettoyage du localStorage lors de la déconnexion
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload;
      state.isAuthenticated = true;
      // return action.payload.data;
    });
    // .addCase(fetchUserThunk.fulfilled, (state, action) => {
    //   state.user = action.payload.body;
    // })
    // .addCase(updateUserThunk.fulfilled, (state, action) => {
    //   state.user = action.payload.body;
    // });
  },
});

export const { toggleRememberMe, loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;

//Sign in : on récupère le nom dans le header, sign in devient sign out
//Message avec "Welcome + prénom + nom de l'utilisateur"
//Bouton edit name : nous permet de réaliser l'action du endpoint 'put'
