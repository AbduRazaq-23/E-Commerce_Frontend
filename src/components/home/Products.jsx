import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useGetProductQuery } from "../../app/api/productsSlice";

const Products = () => {
  const { data, error, isLoading } = useGetProductQuery();
  const [products, setProducts] = useState();

  useEffect(() => {
    try {
      data && setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  return (
    <div className="w-full rounded-lg bg-[#F9DBBA]">
      <div className="w-full pt-10">
        <h1 className="text-center text-3xl font-bold text-gray-700 underline ">
          Products
        </h1>
        <div className="p-10 grid md:grid-cols-4  gap-4 ">
          {Array.isArray(products) ? (
            <>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </>
          ) : (
            <p>server error...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
