import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  orderedCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;

      const existingProductIndex = state.cart.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += quantity;
      } else {
        state.cart.push({ ...product, quantity });
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
      localStorage.removeItem("cart");
    },
    setOrderedCart: (state, action) => {
      state.orderedCart = action.payload;
    },
  },
});

export const { addToCart, removeToCart, clearCart, setOrderedCart } =
  cartSlice.actions;
export default cartSlice.reducer;
