import React, { useEffect, useState } from "react";
import RightNav from "./RightNav";
import { useGetAllUsersQuery } from "../../app/api/userSlice";
import GetProducts from "./GetProducts";

const Rigt = () => {
  const { data, error, isLoading } = useGetAllUsersQuery({
    credentials: "include",
  });
  const [users, setUsers] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    try {
      (async () => (await data) && setUsers(data.data))();
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  const showUser = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="md:ml-60 w-full ">
      <RightNav />
      <div className="flex flex-col gap-5 w-full bg-[#1A4870]  mt-14 text-gray-200 p-3">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="bg-[#0C1844] p-5 rounded-lg mt-5">
          <h1 className="text-2xl font-bold text-center mb-4">Users</h1>
          <button
            onClick={showUser}
            className="w-full bg-[#1A4870] mb-4 text-gray-200 font-bold p-2 rounded-lg"
          >
            {show ? "show users..." : "hide users..."}
          </button>

          {!show ? (
            <div>
              {isLoading && <p>Loading users...</p>}
              {error && <p>Error fetching users: {error.message}</p>}
              {Array.isArray(users) && (
                <ul className="flex flex-col gap-2">
                  {users.map((user) => (
                    <div
                      className="md:flex justify-between bg-[#1A4870] text-gray-200 p-2 text-sm rounded-lg"
                      key={user._id}
                    >
                      <div className="md:flex items-center space-x-3">
                        <li>
                          <img
                            className="w-8 h-8 rounded-full"
                            src={user.avatar}
                            alt="avatar"
                          />
                        </li>
                        <li className="bg-[#0C1844] p-1 rounded-lg">
                          Name: {user.name}
                        </li>
                        <li className="bg-[#0C1844] p-1 rounded-lg">
                          Email: {user.email}
                        </li>
                        <li className="bg-[#0C1844] p-1 rounded-lg">
                          Date: {user.createdAt}
                        </li>
                      </div>

                      <button className="bg-red-500 hover:bg-red-600  px-1 rounded-md text-gray-200">
                        delete
                      </button>
                    </div>
                  ))}
                </ul>
              )}{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        <GetProducts />
      </div>
    </div>
  );
};

export default Rigt;
