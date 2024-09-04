import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-64 bg-[#1F316F] text-gray-200">
      <div className=" flex flex-col  md:flex-row justify-around h-full items-center ">
        <h1 className="text-3xl font-bold">
          E.<span className="text-red-500">com</span>
        </h1>
        <ul>
          <li>email: abdurazaq.dev23@gmail.com</li>
          <li>phone: +923065011190</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
