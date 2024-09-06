import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userDetails: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload.isLogin;
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload.userDetails;
    },
  },
});

export const { setIsLogin } = authSlice.actions;
export default authSlice.reducer;
