import { apiSlice } from "./apiSlice";
import {
  CREATE_ORDER_API,
  GET_ORDER_API,
  DELETE_ORDER_API,
  GET_SINGLE_ORDER_API,
} from "../constant";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: `${GET_ORDER_API}`,
      }),
    }),

    getSingleOrder: builder.query({
      query: (orderId) => ({
        url: `${GET_SINGLE_ORDER_API}/${orderId}`,
      }),
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: `${CREATE_ORDER_API}`,
        method: "POST",
        body: data,
      }),
    }),

    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `${DELETE_ORDER_API}/${orderId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useGetSingleOrderQuery,
  useDeleteOrderMutation,
} = orderApiSlice;
