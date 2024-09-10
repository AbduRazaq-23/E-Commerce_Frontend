import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import {
  useLogoutMutation,
  useGetCurrentProfileQuery,
} from "../../app/api/userSlice";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isToken, setIsToken] = useState("");
  const [user, setUser] = useState();
  const Navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { data } = useGetCurrentProfileQuery();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsToken(token);
    data && setUser(data.data);
  }, [data]);

  const logOutHandler = async () => {
    try {
      await logout({ credentials: "include" }).unwrap();
      toast.success("logout successfully");
      window.location.reload();
      Navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  // profile show and hide handler
  const profile = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="fixed top-0 w-full h-16 bg-[#1F316F]">
      <div className="h-full w-full px-3 flex items-center justify-between text-gray-200 text-sm">
        <div className="flex space-x-1">
          <img
            className="w-8"
            src="https://cdn.pixabay.com/photo/2016/09/30/17/29/shopping-1705800_1280.png"
            alt="image"
          />
          <p className="text-2xl font-bold">
            E.<span className="text-red-500">com</span>
          </p>
        </div>

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
          {!isToken ? (
            <>
              <Link to={"/signup"}>
                <button className="border rounded-lg px-1 hover:bg-[#F9DBBA] hover:text-gray-700">
                  signup
                </button>
              </Link>
              <Link to={"/signin"}>
                <button className="border rounded-lg px-1 hover:bg-[#F9DBBA] hover:text-gray-700">
                  signin
                </button>
              </Link>{" "}
            </>
          ) : (
            <>
              <FaCartPlus size={20} />
              <button
                onClick={logOutHandler}
                className="border rounded-lg px-1 hover:bg-[#F9DBBA] hover:text-gray-700"
              >
                logout
              </button>
              <img
                onClick={profile}
                className="w-8 h-8 rounded-full bg-cover"
                src={user?.avatar}
                alt="avatar"
              />

              {/* // profile popup */}
              {isShow && (
                <div className="fixed inset-0 flex justify-end items-baseline  bg-black bg-opacity-50 z-50">
                  <div className="bg-[#1F316F]  p-6 rounded-bl-xl shadow-lg w-50 ">
                    {/* Close button */}

                    <FaXmark className="ml-auto mb-4" onClick={profile} />

                    <h2 className="text-xl text-center font-bold ">
                      Profile Details
                    </h2>
                    <div className=" w-full flex flex-col items-center gap-1 py-5">
                      <p>
                        <img
                          className="w-16 h-16 rounded-full"
                          src={user?.avatar}
                          alt="avatar"
                        />
                      </p>
                      <p>{user?.name}</p>
                      <p>{user?.email}</p>
                    </div>
                  </div>
                </div>
              )}
              {/* end of profile popup  */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
