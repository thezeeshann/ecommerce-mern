import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  user: localStorage.getItem("token")
    ? JSON.stringify(localStorage.getItem("token"))
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
