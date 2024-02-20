// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Le reducer à créer

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres reducers si nécessaire
});

export default rootReducer;

//PAS BESOIN DE FICHIER REDUCERS SI ON UTILISER REDUX TOOLKIT CAR LES FICHIERS REDUCERS SONT REGROUPES DANS LES SLICES
