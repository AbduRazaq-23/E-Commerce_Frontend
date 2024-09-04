import React from "react";

const Carousel = () => {
  return (
    <div className="w-full h-96 mt-16 bg-[#1A4870] text-gray-200">
      <div className="md:flex items-center h-full w-full gap-8">
        <div className="flex-1 ">
          <h1 className="text-3xl font-bold ml-12">
            Wel<span className="text-[#F9DBBA]">Come</span>{" "}
          </h1>
          <p className="ml-12">
            Find out what ecommerce is, along with the advantages and
            disadvantages for different ways of conducting business online.
          </p>
        </div>
        <img
          className="h-full flex-1"
          src="https://cdn.pixabay.com/photo/2024/02/21/11/17/ai-generated-8587423_1280.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Carousel;
