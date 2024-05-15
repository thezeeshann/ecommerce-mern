import { PRODUCT_URL,GET_SINGLE_PRODUCT_API } from "../constant";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}`,
      }),
    }),

    getSingleProduct:builder.query({
      query:(productSlug)=>({
        url:`${GET_SINGLE_PRODUCT_API}/${productSlug}`
      })
    })

  }),
});

export const { useGetProductsQuery,useGetSingleProductQuery } = productApiSlice;
