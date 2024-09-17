import { data } from "autoprefixer";
import { apiSlice } from "./apiSlice";

const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // createCategory
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
    }),
    // delete category
    deleteCategory: builder.mutation({
      query: (productId) => ({
        url: `/categories/${productId}`,
        method: "DELETE",
      }),
    }),
    //get all categories
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories/getcategory",
      }),
      providesTags: ["Category"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} = categorySlice;
