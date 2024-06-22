import {
  PRODUCT_URL_API,
  GET_SINGLE_PRODUCT_API,
  GET_HIGH_TO_LOW_PRICE_PRODUCT_API,
  GET_LOW_TO_HIGH_PRICE_PRODUCT_API,
  DELETE_PRODUCT_API,
  CREATE_PRODUCT_API,
  UPDATE_PRODUCT_API,
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

    createProduct: builder.mutation({
      query: (formData) => ({
        url: `${CREATE_PRODUCT_API}`,
        method: "POST",
        body: formData,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({productId, formData}) => ({
        url: `${UPDATE_PRODUCT_API}/${productId}`,
        method: "PUT",
        body: formData,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${DELETE_PRODUCT_API}/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetLowToHightPriceProductQuery,
  useGetHighToLowPriceProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
