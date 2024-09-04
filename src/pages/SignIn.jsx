import { useEffect, useState } from "react";
import { useLoginMutation } from "../app/api/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const userData = await login(
        { email, password },
        { credentials: "include" }
      ).unwrap();
      const { data } = userData;
      console.log("User logged in:", data?.isAdmin);
      toast.success("login successfully");

      data?.isAdmin === true ? Navigate("/dashboard") : Navigate("/");
    } catch (err) {
      console.error("Failed to login:", err);
      toast.error("failed to login");
    }
  };

  return (
    <>
      <div className="w-full h-screen p-2 bg-[#1F316F] text-gray-200 flex items-center">
        <div className="w-full md:w-80 bg-[#1A4870] mx-auto ">
          <div className="w-full flex flex-col gap-8 p-2 py-10 border border-gray-200 rounded-lg">
            <h1 className="text-center font-bold"> SignIn</h1>
            <div className="flex flex-col gap-3">
              <input
                className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-[#1F316F] rounded-lg py-1 text-sm hover:bg-[#5B99C2] hover:text-[#1F316F]"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "SignIn"}
            </button>
            {isError && (
              <p className="text-red-500 text-sm mt-2">
                {error?.data?.message || "Failed to login"}
              </p>
            )}
            <p className="text-sm text-center">
              if don't have an account{" "}
              <Link to={"/signup"}>
                <span className="text-white underline hover:text-gray-200">
                  SignUp
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
