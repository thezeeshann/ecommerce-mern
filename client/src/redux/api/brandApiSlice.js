import { apiSlice } from "./apiSlice";
import {
  GET_BRANDS_API,
  CREATE_BRANDS_API,
  DELETE_BRANDS_API,
} from "../constant";

export const brandApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => ({
        url: `${GET_BRANDS_API}`,
      }),
    }),

    addBrand: builder.mutation({
      query: (data) => ({
        url: `${CREATE_BRANDS_API}`,
        method: "POST",
        body: data,
      }),
    }),

    deleteBrand: builder.mutation({
      query: (brandId) => ({
        url: `${DELETE_BRANDS_API}`,
        method: "DELETE",
        body: brandId,
      }),
    }),
  }),
});

export const {
  useGetBrandsQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
} = brandApiSlice;
