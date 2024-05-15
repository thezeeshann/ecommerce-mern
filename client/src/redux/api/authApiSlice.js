import { SIGNUP_API, LOGIN_API, CHANGE_PASSWORD_API } from "../constant";
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

    changePassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: `${CHANGE_PASSWORD_API}`,
        method: "POST",
        body: { oldPassword, newPassword },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useChangePasswordMutation,
} = authApiSlice;
