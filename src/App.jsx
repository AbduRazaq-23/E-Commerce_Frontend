import { useState } from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import AddProducts from "./components/dashboard/AddProducts";
import UpdateProducts from "./components/dashboard/UpdateProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* admin route  */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/addProducts" element={<AddProducts />} />
        <Route path="/dashboard/updateProducts" element={<UpdateProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
