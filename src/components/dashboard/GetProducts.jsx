import React from "react";

const GetProducts = () => {
  return (
    <div className="w-full m-2 p-2 bg-[#F9DBBA] mx-auto rounded-lg text-gray-700 text-sm">
      <h1 className="text-2xl font-bold text-center mb-5">products</h1>

      <div className="flex justify-between w-full bg-gray-200 p-2 rounded-lg">
        <div className="flex gap-4 items-center">
          <img className="w-14 h-14" src={""} alt="image" />
          <div className="flex flex-col gap-2">
            <ul className="flex gap-2">
              <li className="bg-gray-300 p-1 rounded-lg">title</li>
              <li className="bg-gray-300 p-1 rounded-lg">description</li>
              <li className="bg-gray-300 p-1 rounded-lg">brand</li>
              <li className="bg-gray-300 p-1 rounded-lg">category</li>
              <li className="bg-gray-300 p-1 rounded-lg">quantity</li>
            </ul>
            <ul className="flex gap-2">
              <li className="bg-gray-300 p-1 rounded-lg">price</li>
              <li className="bg-gray-300 p-1 rounded-lg">numRating</li>
              <li className="bg-gray-300 p-1 rounded-lg">numReview</li>
              <li className="bg-gray-300 p-1 rounded-lg">reviews</li>
              <li className="bg-gray-300 p-1 rounded-lg">comment</li>
            </ul>
          </div>{" "}
        </div>
        <div className="flex items-center gap-3 text-gray-200">
          <button className="bg-blue-500 p-1 rounded-lg hover:bg-blue-600">
            update
          </button>
          <button className="bg-red-500 p-1 rounded-lg hover:bg-red-600">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetProducts;
