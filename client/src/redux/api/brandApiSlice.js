import { apiSlice } from "./apiSlice";
import { GET_BRANDS_API } from "../constant";

export const brandApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => ({
        url: `${GET_BRANDS_API}`,
      }),
    }),
  }),
});

export const { useGetBrandsQuery } = brandApiSlice;
