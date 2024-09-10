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
        <div className="bg-[#F9DBBA] p-5 rounded-lg mt-5">
          {show ? (
            <button
              onClick={showUser}
              className="w-full bg-[#FEF9D9] mb-4 text-gray-700 p-2 rounded-lg"
            >
              show users...
            </button>
          ) : (
            <button
              onClick={showUser}
              className="w-full bg-[#FEF9D9] mb-4 text-gray-700 p-2 rounded-lg"
            >
              hide users...
            </button>
          )}
          {!show ? (
            <div>
              {isLoading && <p>Loading users...</p>}
              {error && <p>Error fetching users: {error.message}</p>}
              {Array.isArray(users) && (
                <ul className="flex flex-col gap-2">
                  {users.map((user) => (
                    <div
                      className="md:flex justify-between bg-[#D2E0FB] text-gray-700 p-2 rounded-lg"
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
                        <li>Name: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Date: {user.createdAt}</li>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md text-gray-200">
                          update
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 py-1 px-2 rounded-md text-gray-200">
                          delete
                        </button>
                      </div>
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
