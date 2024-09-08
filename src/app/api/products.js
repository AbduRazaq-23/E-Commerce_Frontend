import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getProduct: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["Products"],
      keepUnusedDataFor: 5,
    }),
    //createProducts
    createProducts: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    //update products
    updateProducts: builder.mutation({
      query: (productId, data) => ({
        url: `/products/${productId}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    //deleteProducts
    deleteProducts: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    //getNewProducts
    getNewProducts: builder.query({
      query: () => ({
        url: "/products/new",
      }),
      providesTags: ["Products"],
      keepUnusedDataFor: 5,
    }),
    //add product review
    addReviews: builder.mutation({
      query: (productId, data) => ({
        url: `/products/review/${productId}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    //addComments
    addComments: builder.mutation({
      query: (productId, data) => ({
        url: `/products/comments/${productId}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    //searchProducts
    searchProducts: builder.mutation({
      query: (keyword) => ({
        url: `/products/search/${keyword}`,
        method: "GET",
      }),
    }),
    //
  }),
});

export const {
  useGetProductQuery,
  useCreateProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
  useGetNewProductsQuery,
  useAddReviewsMutation,
  useAddCommentsMutation,
  useSearchProductsMutation,
} = productSlice;
