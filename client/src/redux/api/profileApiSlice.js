import { apiSlice } from "./apiSlice";
import { UPDATE_PROFILE_API, UPDATE_USERNAME_API } from "../constant";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${UPDATE_PROFILE_API}`,
        method: "PUT",
        body: data,
      }),
    }),

    updateUsername: builder.mutation({
      query: (data) => ({
        url: `${UPDATE_USERNAME_API}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateProfileMutation, useUpdateUsernameMutation } =
  profileApiSlice;
