import { loginUser } from '../apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Création d'un thunk car besoin d'effectuer une requête asynchrone : call API pour authentifier l'utilisateur
//rejectWithValue : fonctionne avec createAsyncThunk. Permet à l'app de réagir aux erreurs (arffichage d'un message à l'utilisateur par exemple)

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginUser(email, password);
      return data;
    } catch (error) {
      // Propager l'erreur au store Redux
      return rejectWithValue(error.message);
    }
  },
);
