import { apiSlice } from "./apiSlice";
import { GET_CATEGORY_API } from "../constant";

export const CategoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: `${GET_CATEGORY_API}`,
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = CategoryApiSlice;
