import {
  GET_REVIEW_API,
  GET_SINGLE_REVIEW_API,
  CREATE_REVIEW_API,
  DELETE_REVIEW_API,
} from "../constant";
import { apiSlice } from "./apiSlice";

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: `${GET_REVIEW_API}`,
      }),
    }),

    getSingleReview: builder.query({
      query: (productId) => ({
        url: `${GET_SINGLE_REVIEW_API}/${productId}`,
      }),
    }),

    addReview: builder.mutation({
      query: (data) => ({
        url: `${CREATE_REVIEW_API}`,
        method: "POST",
        body: data,
      }),
    }),

    deleteReview: builder.mutation({
      query: (reviewId) => ({
        url: `${DELETE_REVIEW_API}/${reviewId}`,
        method: "DELETE"
      }),
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetSingleReviewQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
} = reviewApiSlice;
