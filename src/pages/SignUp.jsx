import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full h-screen p-2 bg-[#1F316F] text-gray-200 flex items-center">
      <div className="w-full md:w-80 bg-[#1A4870] mx-auto ">
        <div className="w-full  flex flex-col gap-8 p-2 py-10  border border-gray-200 rounded-lg">
          <h1 className="text-center font-bold"> SignUp</h1>
          {/* field div  */}
          <div className="flex flex-col gap-3">
            {/* image  */}
            {/* <div className="relative w-full"> */}
            <input type="file" id="file-upload" className="hidden" />
            <label
              htmlFor="file-upload"
              className="w-full text-sm cursor-pointer bg-gray-200 text-gray-700 py-1 px-4 rounded-lg text-center"
            >
              choose avatar
            </label>
            {/* </div> */}
            {/* name  */}
            <input
              className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
              type="text"
              placeholder="Name"
            />
            {/* email  */}
            <input
              className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
              type="text"
              placeholder="email"
            />
            {/* password  */}
            <input
              className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
              type="text"
              placeholder="password"
            />
          </div>
          {/* button  */}
          <button className="bg-[#1F316F] rounded-lg py-1 text-sm  hover:bg-[#5B99C2] hover:text-[#1F316F]">
            SignUp
          </button>
          <p className="text-sm text-center">
            if have already an account{" "}
            <Link to={"/signin"}>
              <span className="text-white underline hover:text-gray-200">
                SignIn
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
