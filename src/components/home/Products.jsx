import React from "react";
import ProductCard from "./productCard";

const Products = () => {
  return (
    <div className="w-full bg-[#F9DBBA]">
      <div className="w-full pt-10">
        <h1 className="text-center text-3xl font-bold text-gray-700 underline ">
          Products
        </h1>
        <div className="p-10 grid md:grid-cols-4  gap-4 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
