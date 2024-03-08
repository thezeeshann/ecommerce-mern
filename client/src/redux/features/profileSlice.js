import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const profileSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    setUser(state, action){
      state.user = action.payload;
    },
  },
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
