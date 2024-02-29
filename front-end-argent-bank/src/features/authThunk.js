import { loginUser } from '../apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Création d'un thunk car besoin d'effectuer une requête asynchrone : call API pour authentifier l'utilisateur
//rejectWithValue : fonctionne avec createAsyncThunk et permet de fournir un payload personnalisé lorsque l'action est rejetée -> peut ensuite être utilsié dans le reducer pour gérer l'erreur.

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginUser(email, password);
      return data;
    } catch (error) {
      //Propage l'erreur au store Redux (authSlice)
      return rejectWithValue(error.message);
    }
  },
);
