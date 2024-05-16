// Importation des dépendances nécessaires
import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// Création du contexte
// Ceci est utilisé pour partager des données qui peuvent être considérées comme «globales» pour un arbre de composants React
export const MyContext = createContext();

// Création du reducer
// Le reducer est une fonction qui détermine les modifications à apporter à l'état de l'application en réponse à une action
const reducer = (state, action) => {
  switch (action.type) {
    // actions ici
    default:
      // Si l'action envoyée au reducer n'est pas reconnue, on retourne l'état actuel
      return state;
  }
}

// Création du composant App
function App() {
  // Création du store Redux en utilisant le reducer défini précédemment
  const store = configureStore({ reducer });

  // Le composant Provider rend le store Redux disponible pour tous les composants enfant
  return (
    <Provider store={store}>
      <div>
        <nav>
          <ul>
            <li></li>
            {/* autres éléments de la liste */}
          </ul>
        </nav>

        {/* // Utilisation du Router pour définir les différentes routes de l'application */}
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

// Exportation du composant App pour qu'il puisse être utilisé dans d'autres fichiers
export default App;