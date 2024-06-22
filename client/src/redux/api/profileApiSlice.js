import { apiSlice } from "./apiSlice";
import {
  UPDATE_PROFILE_API,
  UPDATE_USERNAME_API,
  GET_SINGLE_USER_API,
  GET_ALL_USERS_API,
  DELETE_USER_API,
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
    }),

    getSingleUser: builder.query({
      query: () => ({
        url: `${GET_SINGLE_USER_API}`,
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: `${GET_ALL_USERS_API}`,
      }),
    }),

    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${DELETE_USER_API}/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useDeleteUserMutation,
  useUpdateUsernameMutation,
  useGetSingleUserQuery,
  useGetAllUsersQuery,
} = profileApiSlice;
