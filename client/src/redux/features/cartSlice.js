import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
      localStorage.setItem("cart",JSON.stringify(state.cart))
    },
    removeToCart: (state,action) => {
      const productIdRemove = action.payload
      state.cart = state.cart.filter((productId)=>productId !== productIdRemove)
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    
  },
});

export const { addToCart,removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
