import { PRODUCT_URL } from "../constant";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
