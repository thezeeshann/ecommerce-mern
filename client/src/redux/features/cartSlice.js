import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cart: [],
  products: {}
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeToCart: (state,action) => {
      const productIdRemove = action.payload
      state.cart = state.cart.filter((productId)=>productId !== productIdRemove)
    },
    
  },
});

export const { addToCart,removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
