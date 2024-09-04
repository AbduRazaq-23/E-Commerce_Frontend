import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 bg-[#1F316F]">
      <div className="h-full w-full px-3 flex items-center justify-between text-gray-200 text-sm">
        <img
          className="w-8"
          src="https://cdn.pixabay.com/photo/2016/09/30/17/29/shopping-1705800_1280.png"
          alt="image"
        />

        <div className="hidden md:block border border-gray-200 rounded-lg">
          <input
            className="px-2  bg-[#1F316F] rounded-l-lg focus:outline-none"
            type="text"
            placeholder="search"
          />
          <button className="px-2  rounded-r-lg focus:outline-none">
            search
          </button>
        </div>

        <ul className="hidden  md:flex gap-3 items-center">
          <Link to={"/signup"}>
            <button className="border rounded-lg px-1 hover:bg-[#F9DBBA] hover:text-gray-700">
              signup
            </button>
          </Link>
          <Link to={"/signin"}>
            <button className="border rounded-lg px-1 hover:bg-[#F9DBBA] hover:text-gray-700">
              signin
            </button>
          </Link>
          <FaCartPlus size={20} />
          <button className="border rounded-lg px-1 hover:bg-[#F9DBBA] hover:text-gray-700">
            logout
          </button>
          <img
            className="w-8 rounded-full"
            src="https://cdn.pixabay.com/photo/2016/09/30/17/29/shopping-1705800_1280.png"
            alt="image"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
