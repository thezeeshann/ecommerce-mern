import { GET_REVIEW_API } from "../constant";
import { apiSlice } from "./apiSlice";

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (productId) => ({
        url: `${GET_REVIEW_API}/${productId}`,
      }),
    }),

    addReview: builder.mutation({
      query: ({ data, productId }) => ({
        url: `${GET_REVIEW_API}/${productId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetReviewQuery, useAddReviewMutation } = reviewApiSlice;
