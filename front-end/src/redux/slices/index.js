// Regroup all reducers in one file to export them as a single object. This file will be used in the store configuration.

import { combineReducers } from "redux";
import userSlice from "./userSlice";

export default combineReducers ({
    userSlice,
})