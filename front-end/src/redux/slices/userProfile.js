// redux/thunks/userProfile.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "./userSlice";


export const userProfile = createAsyncThunk(
  "user/userProfile",
  async (token, { dispatch }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch(getUserInfo(data.body));
  }
);