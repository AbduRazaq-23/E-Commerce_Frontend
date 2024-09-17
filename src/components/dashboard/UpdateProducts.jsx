import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductsMutation,
} from "../../app/api/productsSlice";

const UpdateProducts = () => {
  const { productId } = useParams();

  const Navigate = useNavigate();
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  const [updateProducts] = useUpdateProductsMutation();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    quantity: 0,
    countInStock: 0,
    price: 0,
  });

  // Fetch product by ID and update form data when data is available

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.data.name,
        description: data.data.description,
        category: data.data.category,
        brand: data.data.brand,
        quantity: data.data.quantity,
        countInStock: data.data.countInStock,
        price: data.data.price,
      });
    }
  }, [data]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // console.log(data);
  // Update product
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProducts({
        productId, // ID of the product
        formData, // Updated product data
      }).unwrap();

      console.log("this is res updated", res);
      toast.success(res.message, { autoClose: 2000 });
      Navigate("/dashboard");
    } catch (err) {
      console.error(`Failed to update product: ${err}`);
    }
  };

  // Loading and error states
  if (isLoading)
    return (
      <p className="bg-[#0C1844] w-full h-screen text-center text-gray-200 ">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="bg-[#0C1844] w-full h-screen text-center text-gray-200 ">
        {error.message || "An error occurred"}
      </p>
    );

  return (
    <div className="w-full h-screen bg-[#0C1844] ">
      <div className="w-full md:w-[40%] h-screen flex items-center mx-auto  ">
        <form className="bg-[#1A4870]  p-4 py-10 rounded-lg w-full flex flex-col gap-3 text-sm text-gray-200 ">
          <h1 className="text-center text-2xl font-bold mb-5 text-gray-200">
            Update Products
          </h1>

          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="name"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="description"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="category"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="brand"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="quantity"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="number"
            name="countInStock"
            value={formData.countInStock}
            onChange={handleChange}
            placeholder="Count In Stock"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="price"
          />
          <button
            className="bg-[#0C1844]  w-full p-2 rounded-md mt-5 text-gray-200 hover:bg-blue-950"
            onClick={updateProduct}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
          {/* {isError && (
            <p className="text-red-500 text-sm mt-2">
              {error?.data?.message || "Failed to add product"}
            </p>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
