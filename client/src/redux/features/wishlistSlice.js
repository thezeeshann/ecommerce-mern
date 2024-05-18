import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: localStorage.getItem("wishList") ? JSON.parse(localStorage.getItem("wishList")) : [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const product = action.payload;
      if (!state.wishList.find(item => item._id === product._id)) {
        state.wishList.push(product);
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      }
    },
    removeFromWishList: (state, action) => {
      const productId = action.payload;
      state.wishList = state.wishList.filter(item => item._id !== productId);
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
