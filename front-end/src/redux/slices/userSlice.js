import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userProfil: null,
  userToken: null,
  loginError: null,
}

function initializeState() { // Récupération du jeton et du profil utilisateur depuis le localStorage
  const token = localStorage.getItem("token")
  const userProfil = localStorage.getItem("userProfil")
  if (!token || !userProfil) {// Si le jeton ou le profil utilisateur n'existe pas, retourner l'état initial
    return initialState
  }
  // Mise à jour de l'état initial avec les valeurs récupérées
  initialState.userToken = localStorage.getItem("token")
  initialState.userProfil = JSON.parse(localStorage.getItem("userProfil"))// Conversion de la chaîne JSON en objet
  return initialState
}

export const userSlice = createSlice({
  name: "user",
  initialState: initializeState(),
  reducers: {
    // Store user token
    getUserToken: (state, action) => {
      state.userToken = action.payload
    },
    // Store user information
    getUserInfo: (state, action) => {
      state.userProfil = action.payload
    },
    // Action pour nettoyer le store
    cleanStore: (state, action) => {
      // Réinitialisation des informations de l'utilisateur
      state.userToken = action.payload,
        state.userProfil.id = action.payload
      state.userProfil.email = action.payload
      state.userProfil.firstName = action.payload
      state.userProfil.lastName = action.payload
      state.userProfil.userName = action.payload
    },
    loginSuccess: (state, action) => {
      state.userToken = action.payload;
      state.loginError = null;
    },
    loginFailed: (state, action) => {
      state.loginError = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userProfil = action.payload;
    },
    updateUsername: (state, action) => {
      state.userProfil.userName = action.payload;
    },
  },
})

export const { getUserToken, getUserInfo, cleanStore, loginSuccess, loginFailed, updateUsername, setUserInfo } = userSlice.actions

export default userSlice.reducer