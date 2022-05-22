import React from "react";
import SidebarItems from "../../components/sidebar-items/SidebarItems";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="full-height">
      <div className="items-container">
        <SidebarItems name={"Home"} />
        <SidebarItems name={"Profile"} />
      </div>
    </div>
  );
};

export default Sidebar;
