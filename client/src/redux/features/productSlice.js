import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  products: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState: initalState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
