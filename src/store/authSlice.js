import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  idToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.email;
      state.idToken = action.payload.idToken;

      localStorage.setItem("idToken", action.payload.idToken);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.idToken = null;

      localStorage.removeItem("idToken");
    },
    LoginStatus: (state) => {
      const token = localStorage.getItem("idToken");
      if (token) {
        state.isLoggedIn = true;
        state.idToken = token;
      }
    },
  },
});

export const { login, logout, LoginStatus } = authSlice.actions;
export default authSlice.reducer;
