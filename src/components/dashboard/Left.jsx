import React from "react";
import { FaHome, FaProductHunt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";

const Left = () => {
  return (
    <div className="w-full md:w-60 md:fixed md:left-0 md:h-screen bg-[#0C1844] p-2">
      <div className="flex items-center gap-2">
        <img
          className="w-8"
          src="https://cdn.pixabay.com/photo/2016/09/30/17/29/shopping-1705800_1280.png"
          alt="image"
        />
        <h5 className="text-white font-bold">
          E.<span className="text-[#FF6969]">com</span>{" "}
        </h5>
      </div>
      <div>
        <ul className="flex flex-col gap-5 text-gray-200 mt-10 text-sm">
          <li className="flex items-center gap-4">
            <FaHome size={20} /> Home
          </li>
          <li className="flex items-center gap-4">
            <FaProductHunt size={20} /> Products
          </li>
          <li className="flex items-center gap-4">
            <BiSolidCategoryAlt size={20} /> Category
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
