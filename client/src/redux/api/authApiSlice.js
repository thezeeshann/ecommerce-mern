import { SIGNUP_API, LOGIN_API } from "../constant";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${SIGNUP_API}`,
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: `${LOGIN_API}`,
        method: "POST",
        body: data,
      }),
    }),


  }),
});

export const { useRegisterMutation, useLoginMutation } =
  authApiSlice;
