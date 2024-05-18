import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./features/authSlice";
import productsReducer from "./features/productSlice";
import profileReducer from "./features/profileSlice";
import cartReducer from "./features/cartSlice";
import wishlistSlice from "./features/wishlistSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    product: productsReducer,
    user: profileReducer,
    cart: cartReducer,
    wishlist: wishlistSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
