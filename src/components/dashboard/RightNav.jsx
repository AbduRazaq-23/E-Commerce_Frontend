import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import {
  useLogoutMutation,
  useGetCurrentProfileQuery,
} from "../../app/api/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const RightNav = () => {
  const [cookie, setCookie] = useState();
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { data } = useGetCurrentProfileQuery();

  // get cookie
  useEffect(() => {
    const token = Cookies.get("token");
    token && setCookie(token);
    data && setUser(data.data);
  }, [data]);

  // handleLogOut
  const handleLogOut = async () => {
    try {
      await logout({ credential: "include" }).unwrap();
      toast.success("logout successfully");
      Navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="fixed top-0 w-full bg-[#0C1844] h-14 ">
      <div className=" h-full flex justify-evenly items-center">
        <div>
          <input
            className="p-1 overflow-hidden rounded-l-lg w-80 focus:outline-none"
            type="text"
            placeholder="search..."
          />
          <button className="py-1 px-4 text-gray-700 bg-[#FFF5E1] rounded-r-lg ">
            search
          </button>
        </div>
        <ul className="flex items-center gap-4 mr-4 text-gray-200">
          <button>
            <FaCartPlus size={20} />
          </button>
          {cookie && (
            <button
              onClick={handleLogOut}
              className="border rounded-lg px-1 hover:bg-[#F9DBBA] hover:text-gray-700"
            >
              logout
            </button>
          )}

          <img className="w-8 rounded-full" src={user?.avatar} alt="avatar" />
        </ul>
      </div>
    </div>
  );
};

export default RightNav;
