import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Register
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    // Login
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logIn`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    // Logout
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logOut`,
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  userSlice;
