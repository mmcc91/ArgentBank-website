// Importation des modules nécessaires pour configurer le store Redux et la persistance des données
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // Utilise localStorage pour le web par défaut
import rootReducer from '../slices/userProfile'

// Configuration de la persistance des données
const persistConfig = {
  key: 'root', // Clé sous laquelle les données persistées seront stockées
  storage, // Utilisation de localStorage pour le stockage
}

// Création d'un réducteur persistant à partir du réducteur racine et de la configuration de persistance
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Création du store Redux
const store = configureStore({
    reducer: persistedReducer, // Utilisation du réducteur persistant
    devTools: true, // Activation des DevTools Redux
    // Configuration du middleware pour éviter les avertissements de sérialisation pour certaines actions
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", "persist/PAUSE", "persist/PURGE", "persist/REGISTER", "persist/FLUSH"],
        },
    }),
});

// Création du persistor, qui contrôle la persistance et la réhydratation du store
let persistor = persistStore(store)

export { store, persistor }