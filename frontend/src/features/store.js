import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./userSlice";

const store = configureStore({
  reducer: {
    registration: authSlice,
  },
});

export default store;
