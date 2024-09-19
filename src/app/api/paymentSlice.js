import { apiSlice } from "./apiSlice";

const paymentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // payment mutation
    pay: builder.mutation({
      query: (data) => ({
        url: "/payment/pay",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePayMutation } = paymentSlice;
