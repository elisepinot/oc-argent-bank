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

// // Au démarrage de l'application, vérifier si il y a un token dans le localStorage pour authentifier l'utilisateur directement
// const token = localStorage.getItem('token');
// if (token) {
//   // Dispatche une action pour rétablir la session ou simplement mettre à jour le store directement
//   store.dispatch(authSlice.actions.loginSuccess({ token }));
// }
