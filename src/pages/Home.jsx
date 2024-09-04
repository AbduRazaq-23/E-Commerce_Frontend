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
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
