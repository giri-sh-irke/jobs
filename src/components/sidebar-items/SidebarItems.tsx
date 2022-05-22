import React from "react";
import "./SidebarItems.css";

const SidebarItems: React.FC<{
  name: String;
}> = ({ name }) => {
  return (
    <>
      <div className="item">
        <img
          className="mr-1"
          src="/assets/sidebar-icons/Home.svg"
          alt="icon"
        ></img>
        {name}
      </div>
    </>
  );
};

export default SidebarItems;
