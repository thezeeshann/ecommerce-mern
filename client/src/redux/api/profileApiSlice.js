import { apiSlice } from "./apiSlice";
import {
  UPDATE_PROFILE_API,
  UPDATE_USERNAME_API,
  GET_SINGLE_USER_API,
  GET_ALL_USERS_API,
} from "../constant";

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
      invalidatesTags: ["User"],
    }),

    getSingleUser: builder.query({
      query: () => ({
        url: `${GET_SINGLE_USER_API}`,
      }),
      providesTags: ["User"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: `${GET_ALL_USERS_API}`,
      }),
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useUpdateUsernameMutation,
  useGetSingleUserQuery,
  useGetAllUsersQuery,
} = profileApiSlice;
