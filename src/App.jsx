import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import AddProducts from "./components/dashboard/AddProducts";
import UpdateProducts from "./components/dashboard/UpdateProducts";
import ProductDetails from "./components/home/productDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/productdetails/:productId" element={<ProductDetails />} />

        {/* admin route  */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/addProducts" element={<AddProducts />} />
        <Route
          path="/dashboard/updateProducts/:productId"
          element={<UpdateProducts />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
