import { loginUser } from '../apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Création d'un thunk car besoin d'effectuer une requête asynchrone : call API pour authentifier l'utilisateur
//rejectWithValue : fonctionne avec createAsyncThunk. Permet à l'app de réagir aux erreurs (arffichage d'un message à l'utilisateur par exemple)
export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    // ({ email, password, rememberMe })
    try {
      const data = await loginUser(email, password);

      //Vérifier si l'option Remember me est activée
      // if (getState().auth.rememberMe) {
      //   localStorage.setItem('token', data.token);
      //   console.log('La case Remember me est cochée');
      // } else {
      //   sessionStorage.setItem('token', data.token);
      // }
      return data;
    } catch (error) {
      // Propager l'erreur au store Redux
      return rejectWithValue(error.message);
    }
  },
);

// if (rememberMe) {
//   localStorage.setItem("currentUser", JSON.stringify(data));
// } else {
//   sessionStorage.setItem("currentUser", JSON.stringify(data));
// }
