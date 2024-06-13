import { apiSlice } from "./apiSlice";
import { CREATE_ORDER_API, GET_ORDER_API } from "../constant";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: `${GET_ORDER_API}`,
      }),
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: `${CREATE_ORDER_API}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = orderApiSlice;
