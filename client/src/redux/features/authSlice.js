import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    setSignUpData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },

  },
});

export const { setSignUpData, setLoading,setToken } = authSlice.actions;
export default authSlice.reducer;
