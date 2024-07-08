import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity,userId} = action.payload;

      const existingProductIndex = state.cart.findIndex(
        (item) => item._id === product._id && item.userId === userId
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += quantity;
      } else {
        state.cart.push({ ...product, quantity,userId });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeToCart: (state, action) => {
      const productIdRemove = action.payload;
      state.cart = state.cart.filter(
        (product) => product._id !== productIdRemove
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem('cart');
    }
  },
});

export const { addToCart, removeToCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
