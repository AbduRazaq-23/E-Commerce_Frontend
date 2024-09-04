import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <div className="w-full bg-[#F9DBBA] ">
      <div className="p-10">
        <h1 className="text-center text-3xl text-gray-700 underline font-bold">
          Categories
        </h1>
        <div className="grid md:grid-cols-3 gap-2 mt-12">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </div>
    </div>
  );
};

export default Categories;
