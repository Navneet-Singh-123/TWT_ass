import React from "react";
import SidebarBottom from "./SidebarBottom";
import SidebarTop from "./SidebarTop";
const Sidebar = (props) => {
  return (
    <div className="container">
      <div className="sidebar">
        <SidebarTop />
        <SidebarBottom />
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Sidebar;
