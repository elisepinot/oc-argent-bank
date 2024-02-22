import { fetchUserLogin } from '../apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Définition de vos thunks en utilisant les fonctions du service API
export const loginThunk = createAsyncThunk('auth/login', async ({ email, password }) => {
  // ({ email, password, rememberMe })
  const data = await fetchUserLogin(email, password);

  // if (rememberMe) {
  //   localStorage.setItem("currentUser", JSON.stringify(data));
  // } else {
  //   sessionStorage.setItem("currentUser", JSON.stringify(data));
  // }

  return data;
});
