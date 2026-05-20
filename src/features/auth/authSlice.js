import { createSlice } from "@reduxjs/toolkit";

// GET USER FROM LOCAL STORAGE
const storedUser = localStorage.getItem("user");

const initialState = {
  user: storedUser
    ? JSON.parse(storedUser)
    : null,

  isAuthenticated: storedUser ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {

    // LOGIN
    login: (state, action) => {

      state.user = action.payload;
      state.isAuthenticated = true;

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
    },

    // LOGOUT
    logout: (state) => {

      state.user = null;
      state.isAuthenticated = false;

      // REMOVE USER
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } =
  authSlice.actions;

export default authSlice.reducer;