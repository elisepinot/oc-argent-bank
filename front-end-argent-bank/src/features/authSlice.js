import { createSlice } from '@reduxjs/toolkit';

//On a besoin d'un état initial pour l'authentification, ainsi que de reducers pour mettre à jour cet état en fonction des actions telles que l'authentification, la déconnexion, etc.
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

//Le slice nommé 'auth' contient 2 reducers : login et logout

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      //Je peux déstructurer l'objet action.payload
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
