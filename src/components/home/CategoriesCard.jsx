import React from "react";
import CategorySubCard from "./CategorySubCard";

const CategoriesCard = () => {
  return (
    <div className="bg-gray-100 rounded-lg">
      <h1 className="text-center text-sm font-bold">category</h1>
      <div className="grid grid-cols-2 gap-1 p-4 ">
        <CategorySubCard />
        <CategorySubCard />
        <CategorySubCard />
        <CategorySubCard />
      </div>
    </div>
  );
};

export default CategoriesCard;
