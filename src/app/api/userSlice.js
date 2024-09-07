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
        credentials: "include",
      }),
    }),
    // getCurrentProfile
    getCurrentProfile: builder.query({
      query: () => ({
        url: `${USERS_URL}/getcurrentuser`,
        credentials: "include",
      }),
      provideTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    // getAllUsers
    getAllUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}/getallusers`,
        credentials: "include",
      }),
      provideTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    //update user details
    updateDetails: builder.mutation({
      query: (userId, data) => ({
        url: `${USERS_URL}/updatedetails/${userId}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    //update avatar
    updateAvatar: builder.mutation({
      query: (userId, data) => ({
        url: `${USERS_URL}/updateavatar/${userId}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    //change password
    changePassword: builder.mutation({
      query: (userId, data) => ({
        url: `${USERS_URL}/changePassword/${userId}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentProfileQuery,
  useGetAllUsersQuery,
  useUpdateDetailsMutation,
  useUpdateAvatarMutation,
  useChangePasswordMutation,
} = userSlice;
