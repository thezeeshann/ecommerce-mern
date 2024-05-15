import { GET_REVIEW } from "../constant";
import { apiSlice } from "./apiSlice";

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (productId) => ({
        url: `${GET_REVIEW}/${productId}`,
      }),
    }),

    addReview: builder.mutation({
      query: ({ data, productId }) => ({
        url: `${GET_REVIEW}/${productId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetReviewQuery, useAddReviewMutation } = reviewApiSlice;
