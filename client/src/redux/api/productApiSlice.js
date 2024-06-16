import {
  PRODUCT_URL_API,
  GET_SINGLE_PRODUCT_API,
  GET_HIGH_TO_LOW_PRICE_PRODUCT_API,
  GET_LOW_TO_HIGH_PRICE_PRODUCT_API,
} from "../constant";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL_API}`,
      }),
    }),

    getSingleProduct: builder.query({
      query: (productSlug) => ({
        url: `${GET_SINGLE_PRODUCT_API}/${productSlug}`,
      }),
    }),

    getLowToHightPriceProduct: builder.query({
      query: () => ({
        url: `${GET_LOW_TO_HIGH_PRICE_PRODUCT_API}`,
      }),
    }),

    getHighToLowPriceProduct: builder.query({
      query: () => ({
        url: `${GET_HIGH_TO_LOW_PRICE_PRODUCT_API}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetLowToHightPriceProductQuery,
  useGetHighToLowPriceProductQuery,
} = productApiSlice;
