import React, { useEffect, useState } from "react";
import { FaHome, FaProductHunt, FaCaretDown } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useDeleteCategoryMutation,
} from "../../app/api/categoriesSlice";
import { toast } from "react-toastify";

const Left = () => {
  const [showC, setShowC] = useState(false);
  const [addCInput, setaddCInput] = useState(false);
  const [name, setName] = useState("");

  // createCategories
  const [createCategory] = useCreateCategoryMutation();
  const createCategories = async () => {
    try {
      const res = await createCategory({ name });

      toast.success(res?.data?.message, { autoClose: 1000 });
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  // delete Data
  const [deleteC] = useDeleteCategoryMutation();
  const deleteCategory = async (id) => {
    try {
      const res = await deleteC(id);
      setCtg(res?.data.data);
      toast.success(res?.data.message, { autoClose: 1000 });
    } catch (error) {
      console.log(error);
    }
  };

  // getData
  const [ctg, setCtg] = useState();
  const { data, isError, error, isLoading } = useGetAllCategoriesQuery();
  useEffect(() => {
    data && setCtg(data?.data);
  }, [data]);

  // if isError return error
  if (isError) {
    return <p>error</p>;
  }

  // onclick call to open category panel
  const showCategory = () => {
    setShowC(!showC);
  };
  // onclick call to open category input to add category
  const showCategoryInput = () => {
    setaddCInput(!addCInput);
  };

  return (
    <div className="w-full md:w-60 md:fixed md:left-0 md:h-screen bg-[#0C1844] p-2">
      {/* logo  */}
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
      {/* menu  */}
      <div>
        <ul className="flex flex-col gap-5 text-gray-200 mt-10 text-sm">
          <Link to={"/"}>
            <li className="flex items-center gap-4">
              <FaHome size={20} /> Home
            </li>
          </Link>
          <Link to={"/dashboard/addProducts"}>
            <li className="flex items-center gap-4">
              <FaProductHunt size={20} />
              Add Products
            </li>
          </Link>
          <div className="relative">
            <li onClick={showCategoryInput} className="flex items-center gap-4">
              <BiSolidCategoryAlt size={20} />
              <div className="flex items-center gap-1">
                Add Category
                <FaCaretDown />
              </div>
            </li>
            {/* onclick to show input to add category  */}
            {addCInput && (
              <div className="absolute rounded-md border ml-16 overflow-hidden">
                <input
                  className={` 
                px-1 w-24  focus:outline-none bg-[#0C1844]  `}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="add category"
                />
                <button onClick={createCategories} className="px-1">
                  add
                </button>
              </div>
            )}
          </div>
          {/* categories  */}
          <div className="reltive">
            <li onClick={showCategory} className="flex items-center gap-4">
              <BiSolidCategoryAlt size={20} />
              <div className="flex items-center ">
                Categories
                <FaCaretDown />
              </div>
            </li>

            {/* onclick to show category panel  */}
            {showC && (
              <div className="absolute ml-16 max-h-24 overflow-y-scroll scrollbar-custom border border-[#172a6f] rounded-md">
                {/* isLoading  */}
                {isLoading && <p>Loading...</p>}

                {/* show that all category  */}
                {ctg?.map((c) => (
                  <div key={c._id} className="flex items-center">
                    <button
                      onClick={() => deleteCategory(c._id)}
                      className="hover:scale-105"
                    >
                      <MdDelete />
                    </button>
                    <li className="px-3 my-1 w-full">{c.name}</li>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Left;
