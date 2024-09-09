import React, { useState } from "react";
import { useCreateProductsMutation } from "../../app/api/productsSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const Navigate = useNavigate();
  const [createProduct, { isError, error, isLoading }] =
    useCreateProductsMutation();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    quantity: 0,
    countInStock: 0,
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,

      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const createProducts = async (e) => {
    e.preventDefault();

    // Create FormData to handle both text fields and the image file
    const productData = new FormData();
    productData.append("name", formData.name);
    productData.append("description", formData.description);
    productData.append("category", formData.category);
    productData.append("brand", formData.brand);
    productData.append("quantity", formData.quantity);
    productData.append("countInStock", formData.countInStock);
    productData.append("price", formData.price);

    if (image) {
      productData.append("image", image);
    }

    try {
      await createProduct(productData).unwrap();
      toast.success("Product added successfully");
      Navigate("/dashboard");
    } catch (err) {
      console.error(`Failed to create product: ${err}`);
      toast.error(error?.data?.message || "Failed to add product");
    }
  };

  return (
    <div className="w-full h-screen bg-[#0C1844] ">
      <div className="w-full md:w-[40%] h-screen flex items-center mx-auto  ">
        <form className="bg-[#1A4870]  p-4 py-10 rounded-lg w-full flex flex-col gap-3 text-sm text-gray-700 ">
          <h1 className="text-center text-2xl font-bold mb-5 text-gray-200">
            Add Products
          </h1>
          <input
            className="w-full text-gray-200 bg-[#0C1844] rounded-md"
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
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
            onClick={createProducts}
          >
            {isLoading ? "Adding..." : "Add"}
          </button>
          {isError && (
            <p className="text-red-500 text-sm mt-2">
              {error?.data?.message || "Failed to add product"}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
