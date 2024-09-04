import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="w-full h-90 bg-gray-100 rounded-lg  ">
      <div className="w-full h-full flex flex-col gap-1   ">
        <img
          className="w-full h-72 rounded-t-lg"
          src="https://cdn.pixabay.com/photo/2014/10/31/07/05/young-girl-510441_640.jpg"
          alt=""
        />
        <div className="p-2 text-sm">
          <h1 className="font-semibold">Title</h1>
          <p>description</p>
          <div>
            <FaCartPlus size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
