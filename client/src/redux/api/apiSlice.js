import { BASE_URL } from "../constant";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "../features/profileSlice";
import { setToken } from "../features/authSlice";
import { toast } from "react-hot-toast";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});

export const logout = (navigate) => {
  return (dispatch) => {
    dispatch(setUser(null));
    dispatch(setToken(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/login");
  };
};
