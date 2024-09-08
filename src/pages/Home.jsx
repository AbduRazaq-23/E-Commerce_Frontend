import React from "react";
import Navbar from "../components/home/Navbar";
import Carousel from "../components/home/Carousel";
import Products from "../components/home/Products";
import Categories from "../components/home/Categories";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="flex flex-col gap-3 p-4">
        <Categories />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
