import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userProfil: null,
  userToken: null,
  loginError: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Store user token
    getUserToken: (state, action) => {
      state.userToken = action.payload
    },
    // Store user information
    getUserInfo: (state, action) => {
      state.userProfil = action.payload
    },
    // Clean the store
    cleanStore: (state, action) => {
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