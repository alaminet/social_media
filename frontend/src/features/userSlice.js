import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "authUser",
  initialState: {
    userInfo: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    Loginuser: (state, action) => {
      state.userInfo = action.payload;
    },
    logOutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { Loginuser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
