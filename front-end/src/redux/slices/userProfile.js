// redux/thunks/userProfile.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "./userSlice";


export const userProfile = createAsyncThunk(
  "user/userProfile",
  async (token, { dispatch }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
     
      dispatch(getUserInfo(data.body));
    } catch (error) {
      console.error("A problem occurred with the fetch operation: ", error);
    }
  }
);