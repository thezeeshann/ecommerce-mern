import { GET_REVIEW_API, GET_SINGLE_REVIEW_API } from "../constant";
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
      query: ({ data, productId }) => ({
        url: `${GET_REVIEW_API}/${productId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetSingleReviewQuery,
  useAddReviewMutation,
} = reviewApiSlice;
