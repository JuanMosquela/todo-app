import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  user: string;
  email: string;
  token: string;
  mode: string;
}

const initialState: AuthState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "",
  email: localStorage.getItem("email")
    ? JSON.parse(localStorage.getItem("email") || "")
    : "",
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token") || "")
    : "",
  mode: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { token, user, email } = payload;

      state.user = user;
      state.token = token;
      state.email = email;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("token", JSON.stringify(token));
    },
    setMode: (state, { payload }) => {
      state.mode = payload;
    },
    logout: (state) => {
      state.user = "";
      state.email = "";
      state.token = "";
      localStorage.clear();
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setCredentials, logout, setMode } = authSlice.actions;
export default authSlice.reducer;
