import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // register
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    // login
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    //
  }),
});

export const { useRegisterMutation, useLoginMutation } = userSlice;
