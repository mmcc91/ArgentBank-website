import { configureStore, createSlice } from '@reduxjs/toolkit';

// Création d'un slice pour gérer l'état de l'application
const appSlice = createSlice({
  name: 'app',
  initialState: {
    // Définissez l'état initial ici
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    // Définissez vos reducers ici
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    infoUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Exportation des actions pour les utiliser dans les composants
export const { login, logout } = appSlice.actions;

// Création du store Redux en utilisant le slice défini
const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;