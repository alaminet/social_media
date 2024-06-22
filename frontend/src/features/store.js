import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./userSlice";
import { authApi } from "./api/authApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    loginSlice: authSlice,
  },
  // devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
