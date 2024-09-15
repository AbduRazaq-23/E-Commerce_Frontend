import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-90 bg-[#0C1844] border border-gray-500 rounded-lg text-gray-200  ">
      <div className="w-full h-full flex flex-col gap-1   ">
        <img
          className="w-full h-72 rounded-t-lg"
          src={product.image}
          alt="image"
        />
        <div className="flex justify-between p-2 text-sm">
          <div>
            <h1 className="font-semibold">{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>brand: {product.brand}</p>
            <p>category: {product.category.name}</p>
            <p>rating: {product.rating.toFixed(1)}</p>
          </div>
          <div className="flex flex-col justify-between">
            <FaCartPlus className="ml-auto" size={20} />
            <Link to={`/productdetails/${product._id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 rounded-md p-1 text-gray-200">
                OrderNow
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
