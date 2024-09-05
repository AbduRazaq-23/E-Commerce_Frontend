import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../app/api/userSlice"; // Assuming the path is correct
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const Navigate = useNavigate();

  const [register, { isLoading, isError, error }] = useRegisterMutation();

  // Handle file
  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    console.log(formData);

    try {
      // Call the register mutation
      const userData = await register(formData).unwrap();

      // Handle successful registration
      console.log("User registered:", userData);
      toast.success("Registered successfully!");

      // Redirect to another page after successful signup
      Navigate("/signin");
    } catch (err) {
      console.error("Failed to register:", err);
      toast.error(error?.data?.message || "Failed to register");
    }
  };

  return (
    <div className="w-full h-screen p-2 bg-[#1F316F] text-gray-200 flex items-center">
      <div className="w-full md:w-80 bg-[#1A4870] mx-auto ">
        <div className="w-full  flex flex-col gap-8 p-2 py-10  border border-gray-200 rounded-lg">
          <h1 className="text-center font-bold">SignUp</h1>
          <div className="flex flex-col gap-3">
            {/* Avatar input */}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="w-full text-sm cursor-pointer bg-gray-200 text-gray-700 py-1 px-4 rounded-lg text-center"
            >
              Choose Avatar
            </label>

            {/* Name */}
            <input
              className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email */}
            <input
              className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <input
              className="w-full py-1 px-3 text-gray-700 text-sm bg-slate-200 rounded-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* SignUp button */}
          <button
            className="bg-[#1F316F] rounded-lg py-1 text-sm hover:bg-[#5B99C2] hover:text-[#1F316F]"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "SignUp"}
          </button>

          {/* Error message */}
          {isError && (
            <p className="text-red-500 text-sm mt-2">
              {error?.data?.message || "Failed to register"}
            </p>
          )}

          {/* SignIn link */}
          <p className="text-sm text-center">
            Already have an account?{" "}
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
