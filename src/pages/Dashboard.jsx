import React from "react";
import Left from "../components/dashboard/Left";
import Rigt from "../components/dashboard/Rigt";

const Dashboard = () => {
  return (
    <div className="flex">
      <Left />
      <Rigt />
    </div>
  );
};

export default Dashboard;
