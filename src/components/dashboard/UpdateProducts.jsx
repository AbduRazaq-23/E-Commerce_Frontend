import React from "react";

const UpdateProducts = () => {
  return (
    <div className="w-full h-screen bg-[#0C1844] ">
      <div className="w-full md:w-[40%] h-screen flex items-center mx-auto  ">
        <form
          className="bg-[#1A4870]  p-4 py-10 rounded-lg w-full flex flex-col gap-3 text-sm text-gray-700 "
          action=""
        >
          <h1 className="text-center text-2xl font-bold mb-5 text-gray-200">
            Update Products
          </h1>
          <input
            className="w-full text-gray-200 bg-[#0C1844] rounded-md"
            type="file"
            id="file"
            name="file"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            value={name}
            onChange={(e) => e.target.value}
            placeholder="name"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            //   value={description}
            onChange={(e) => e.target.value}
            placeholder="description"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            //   value={category}
            onChange={(e) => e.target.value}
            placeholder="category"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            //   value={brand}
            onChange={(e) => e.target.value}
            placeholder="brand"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="text"
            //   value={quantity}
            onChange={(e) => e.target.value}
            placeholder="quantity"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="number"
            //   value={countInStock}
            onChange={(e) => e.target.value}
            placeholder="Count In Stock"
          />
          <input
            className="w-full p-1 rounded-md bg-[#0C1844]"
            type="number"
            //   value={price}
            onChange={(e) => e.target.value}
            placeholder="price"
          />
          <button
            className="bg-[#0C1844]  w-full p-2 rounded-md mt-5 text-gray-200 hover:bg-blue-950"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
