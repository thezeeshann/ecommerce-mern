import { ADD_TO_CART_API } from "../constant";
import { apiSlice } from "./apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => ({
        url: `${ADD_TO_CART_API}`,
      }),
    }),

    addToCart: builder.mutation({
      query: (data) => ({
        url: `${ADD_TO_CART_API}`,
        method: "POST",
        body: data,
      }),
    }),

    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `${ADD_TO_CART_API}`,
        method: "DELETE",
        body: productId
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartsQuery,
  useRemoveFromCartMutation,
} = cartApiSlice;
