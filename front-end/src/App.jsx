import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import UserPage from "./pages/userPage";

import userReducer from "./redux/slices/userSlice";

// Création du store Redux en utilisant le reducer défini précédemment
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Création du composant App
function App() {
  // Le composant Provider rend le store Redux disponible pour tous les composants enfant
  return (
    <Provider store={store}>
      <div>
        <nav></nav>

        {/* Utilisation du Router pour définir les différentes routes de l'application */}
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

// Exportation du composant App pour qu'il puisse être utilisé dans d'autres fichiers
export default App;
