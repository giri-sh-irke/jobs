import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dash-container">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
